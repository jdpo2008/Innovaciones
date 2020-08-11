import { EventEmitter, Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import { User } from "firebase/app";
import { BehaviorSubject, Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { Accounts, AuthProvider } from "../enums";
import { FirestoreSyncService } from "./firestore-sync.service";
import {
  ICredentials,
  ISignInProcess,
  ISignUpProcess,
  Config,
  AuthFirebaseUIConfig,
} from "../interfaces";
import { AlertService } from "./alert.service";

import UserCredential = firebase.auth.UserCredential;
import { Store } from "@ngrx/store";
import { AppState } from "../redux/app.store";
import { DesactivarLoadingAction } from "../redux/app.actions";

export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();

@Injectable({
  providedIn: "root",
})
export class AuthProcessService implements ISignInProcess, ISignUpProcess {
  onSuccessEmitter: EventEmitter<any> = new EventEmitter<any>();
  onErrorEmitter: EventEmitter<any> = new EventEmitter<any>();

  private _user$ = new BehaviorSubject<firebase.User | null>(null);
  get user$(): Observable<firebase.User | null> {
    return this._user$.asObservable();
  }
  user: User;

  emailConfirmationSent: boolean;
  emailToConfirm: string;
  config: AuthFirebaseUIConfig;

  constructor(
    public afa: AngularFireAuth,
    private fireStoreService: FirestoreSyncService,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {
    this.config = Config;
  }

  listenToUserEvents() {
    this.afa.user.subscribe((user: firebase.User | null) => {
      this._user$.next(user);
      this.user = user;
    });
  }

  public async resetPassword(email: string): Promise<void> {
    try {
      console.log("Password reset email sent");
      return await this.afa.sendPasswordResetEmail(email);
    } catch (error) {
      return this.notifyError(error);
    }
  }

  public async changePassword(password: string): Promise<void> {
    try {
      return await (await this.afa.currentUser).updatePassword(password);
    } catch (error) {
      return this.notifyError(error);
    }
  }

  public async signInWith(provider: AuthProvider, credentials?: ICredentials) {
    try {
      let signInResult: UserCredential | any;
      switch (provider) {
        case AuthProvider.EmailAndPassword:
          signInResult = (await this.afa.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
          )) as UserCredential;
          break;

        case AuthProvider.Google:
          signInResult = (await this.afa.signInWithPopup(
            googleAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Facebook:
          signInResult = (await this.afa.signInWithPopup(
            facebookAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Twitter:
          signInResult = (await this.afa.signInWithPopup(
            twitterAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.Github:
          signInResult = (await this.afa.signInWithPopup(
            githubAuthProvider
          )) as UserCredential;
          break;

        case AuthProvider.PhoneNumber:
          // coming soon - see feature/sms branch
          break;

        default:
          throw new Error(
            `${AuthProvider[provider]} is not available as auth provider`
          );
      }
      await this.handleSuccess(signInResult);
    } catch (err) {
      this.notifyError(err);
    }
  }

  public async signUp(displayName: string, credentials: ICredentials) {
    try {
      const userCredential: UserCredential = await this.afa.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      const user = userCredential.user;
      await this.updateProfile(displayName, user.photoURL);

      if (this.config.enableFirestoreSync) {
        await this.fireStoreService.getUserDocRefByUID(user.uid).set({
          uid: user.uid,
          displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          providerId:
            user.providerData.length > 0
              ? user.providerData[0].providerId
              : null,
        } as User);
      }

      if (this.config.enableEmailVerification) {
        await user.sendEmailVerification();
      }

      // Legacy fields
      this.emailConfirmationSent = true;
      this.emailToConfirm = credentials.email;

      await this.handleSuccess(userCredential);
    } catch (err) {
      this.notifyError(err);
    }
  }

  public async sendNewVerificationEmail(): Promise<void | never> {
    if (!this.user) {
      return Promise.reject(new Error("No signed in user"));
    }
    return this.user.sendEmailVerification();
  }

  public async signOut() {
    try {
      await this.afa.signOut();
    } catch (error) {
      this.notifyError(error);
    }
  }

  public updateProfile(name: string, photoURL: string): Promise<void> {
    return this.afa.currentUser.then((user: User) => {
      if (!photoURL) {
        return user.updateProfile({ displayName: name });
      } else {
        return user.updateProfile({ displayName: name, photoURL });
      }
    });
  }

  public parseUserInfo(user: User): any {
    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerId:
        user.providerData.length > 0 ? user.providerData[0].providerId : null,
    };
  }

  public getUserPhotoUrl(): Observable<string | null> {
    return this._user$.pipe(
      map((user: firebase.User | null) => {
        if (!user) {
          return null;
        } else if (user.photoURL) {
          return user.photoURL;
        } else if (user.emailVerified) {
          return this.getPhotoPath(Accounts.CHECK);
        } else if (user.isAnonymous) {
          return this.getPhotoPath(Accounts.OFF);
        } else {
          return this.getPhotoPath(Accounts.NONE);
        }
      })
    );
  }

  public getPhotoPath(image: string): string {
    return `assets/images/user/${image}.svg`;
  }

  public async signInWithPhoneNumber(phoneNumber: any) {
    var appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );

    var result = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier);

    // var credential = firebase.auth.PhoneAuthProvider.credential(result.verificationId, code);
    // todo: 3.1.18
  }

  async handleSuccess(userCredential: UserCredential) {
    this.onSuccessEmitter.next(userCredential.user);
    if (this.config.enableFirestoreSync) {
      try {
        await this.fireStoreService.updateUserData(
          this.parseUserInfo(userCredential.user)
        );
      } catch (e) {
        console.error(
          `Error ocurrido mientras se actualizaban los datos del usuario con firestore: ${e}`
        );
      }
    }
    this.store.dispatch(new DesactivarLoadingAction());
    if (this.config.toastMessageOnAuthSuccess) {
      const fallbackMessage = `Bienvenido ${
        userCredential.user.displayName ? userCredential.user.displayName : ""
      }`;
      this.showSuccesToast(fallbackMessage);
    }
  }

  reloadUserInfo() {
    return this._user$
      .pipe(take(1))
      .subscribe((user: User | null) => user && user.reload());
  }

  getMessageOnAuthError(error: any) {
    let accountErrorMessage = "";
    switch (error.code) {
      case "auth/invalid-email": {
        accountErrorMessage = "El email o la contraseña no son correctos.";
        break;
      }
      case "auth/wrong-password": {
        accountErrorMessage = "El email o la contraseña no son correctos.";
        break;
      }
      case "auth/user-not-found": {
        accountErrorMessage =
          "El usuario no se encuentra registrado o es incorrecto.";
        break;
      }
      default: {
        accountErrorMessage =
          "Error al intentar ingresar en la aplicación. Intenta nuevamente";
        break;
      }
    }
    return (
      `Error: ${accountErrorMessage}` ||
      "Sorry, something went wrong. Please retry later."
    );
  }

  showSweetAlert(tipo: any, titulo: string, message: string) {
    if (message) {
      this.alertService.setMensaje(tipo, titulo, message, 5000);
    }
  }

  showSuccesToast(message: any) {
    if (this.config.toastMessageOnAuthSuccess) {
      this.alertService.setMensaje("success", "HOLA!", message, 5000);
    }
  }

  showErrorToast(error: any) {
    if (this.config.toastMessageOnAuthError) {
      this.alertService.setMensaje(
        "error",
        "OPS!",
        this.getMessageOnAuthError(error),
        5000
      );
    }
    this.store.dispatch(new DesactivarLoadingAction());
  }

  notifyError(error: any) {
    this.onErrorEmitter.emit(error);
    this.showErrorToast(error);
  }
}
