import { Component, OnInit, Input, Output } from "@angular/core";
import { AuthProvider } from "../../../enums/auth-providers.enum";
import { AuthProcessService } from "../../../services/auth-sync.service";
import { AuthUIAnimations } from "../auth-ui.animations";

@Component({
  selector: "app-providers",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.css"],
  animations: [AuthUIAnimations],
})
export class ProvidersComponent implements OnInit {
  @Input() layout: string = "row";
  @Input() providers: AuthProvider[] | AuthProvider = AuthProvider.ALL;
  @Output() onSuccess: any;
  @Output() onError: any;

  authProvider = AuthProvider;
  constructor(public authProcess: AuthProcessService) {
    this.onSuccess = authProcess.onSuccessEmitter;
    this.onError = authProcess.onErrorEmitter;
  }

  ngOnInit(): void {}

  processLegalSignUP(authProvider?: AuthProvider) {
    this.authProcess.showSweetAlert(
      "info",
      "Información",
      "Lo sentimos debes contactarnos para registrar tu usuario"
    );
    //this.authProcess.signInWith(authProvider);
  }
}
