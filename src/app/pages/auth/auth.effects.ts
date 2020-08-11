import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { AppState } from "../../redux/app.store";
import { UsersQuery } from "./auth.reducer";
import { Observable } from "rxjs/internal/Observable";
import * as fromAuth from "./auth.actions";
import { AngularFireAuth } from "@angular/fire/auth";
import { switchMap, map, catchError } from "rxjs/operators";
import { forkJoin } from "rxjs/internal/observable/forkJoin";
import { from } from "rxjs/internal/observable/from";
import { of } from "rxjs/internal/observable/of";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private afAuth: AngularFireAuth
  ) {}

  user$ = this.store.select(UsersQuery.getUser);

  @Effect()
  getUser$: Observable<fromAuth.AuthActions> = this.actions$.pipe(
    ofType(fromAuth.GET_USER),
    switchMap(() => this.afAuth.authState),
    switchMap((user) =>
      forkJoin([from(user.getIdTokenResult(true)), of(user)]).pipe(
        map(([token, user]) => {
          if (user) {
            const authState = {
              firestoreCollection: token.claims.firestoreCollection,
              user: {
                admin: token.claims.admin,
                uid: user.uid,
                displayName: user.displayName,
              },
            };
            return new fromAuth.Authenticated(authState);
          } else {
            return new fromAuth.NotAuthenticated();
          }
        })
      )
    ),
    catchError((error) => of(new fromAuth.AuthError(error)))
  );
  // @Effect()
  // login$ = this.actions$.pipe(
  //   ofType(fromAuth.LOGIN),
  //   map((action: Login) => action.payload),
  //   switchMap((credentials: ICredentials) => {
  //     return this.authService.login(credentials).pipe(
  //       map((user: any) => new fromAuth.LoginSuccessAction(user)),
  //       catchError((error) => of(new fromAuth.AuthError(error)))
  //     );
  //   })
  // );
}
