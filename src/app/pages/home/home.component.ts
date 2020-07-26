import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import * as AOS from "aos";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit, AfterViewInit {
  user: any;
  constructor(private router: Router, public _userService: UserService) {}

  ngOnInit() {
    AOS.init();
    this.getCustomersList();
  }

  ngAfterViewInit(): void {}

  onAbout() {
    this.router.navigate(["/pages/about"]);
  }

  onProjects() {
    this.router.navigate(["/pages/projects"]);
  }

  getCustomersList() {
    this._userService
      .getAllUSers()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((user) => {
        this.user = user;
      });
  }
}
