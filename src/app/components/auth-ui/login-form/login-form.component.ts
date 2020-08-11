import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthUIAnimations } from "../auth-ui.animations";
import { AuthProvider } from "../../../enums/auth-providers.enum";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs/internal/Subscription";
import { AuthProcessService } from "../../../services/auth-sync.service";

//NGRX Store
import { Store } from "@ngrx/store";
import { AppState } from "../../../redux/app.store";
import { ActivarLoadingAction } from "../../../redux/app.actions";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
  animations: [AuthUIAnimations],
})
export class LoginFormComponent implements OnInit {
  @Input() providers: string[] | string = AuthProvider.ALL; //  google, facebook, twitter, github as array or all as one single string
  @Input() registrationEnabled = true;
  @Input() resetPasswordEnabled = true;
  @Input() messageOnAuthSuccess: string;
  @Input() messageOnAuthError: string;

  // Events
  @Output() onSuccess: any;
  @Output() onError: any;
  @Output() onCreateAccountRequested: EventEmitter<void> = new EventEmitter<
    void
  >();
  @Output() onResetPasswordRequested: EventEmitter<void> = new EventEmitter<
    void
  >();

  loginForm: FormGroup;
  authProviders = AuthProvider;
  onErrorSubscription: Subscription;
  subscription: Subscription;
  authenticationError = false;
  isLoading = false;
  constructor(
    public authProcess: AuthProcessService,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

  ngOnInit(): void {
    this.subscription = this.store.select("ui").subscribe((ui) => {
      this.isLoading = ui.isLoading;
    });

    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  public async signIn() {
    this.store.dispatch(new ActivarLoadingAction());
    return await this.authProcess.signInWith(
      this.authProviders.EmailAndPassword,
      {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      }
    );
  }
}
