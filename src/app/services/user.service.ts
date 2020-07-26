import { Injectable } from "@angular/core";
import { AlertService } from "./alert.service";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { User } from "firebase/app";

var collection = {
  name: "/users",
};

@Injectable({
  providedIn: "root",
})
export class UserService {
  users: Observable<User[]>;
  usersRef: AngularFirestoreCollection<User> = null;

  constructor(public afs: AngularFirestore, public toast: AlertService) {}

  getAllUSers() {
    this.usersRef = this.afs.collection(collection.name, (ref) =>
      ref.orderBy("displayName").limit(10)
    );
    return this.usersRef;
  }
}
