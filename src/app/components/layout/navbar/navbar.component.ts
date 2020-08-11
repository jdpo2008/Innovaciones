import { Component, OnInit } from "@angular/core";
import { User } from "firebase";
import { AuthProcessService } from "../../../services/auth-sync.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [],
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor(public authProcess: AuthProcessService) {}

  ngOnInit() {
    this.authProcess.afa.authState.subscribe((res) => {
      this.user = res;
      if (res && res.uid) {
        console.log("user logged in");
      } else {
        console.log("user not logged in");
      }
    });
  }
}
