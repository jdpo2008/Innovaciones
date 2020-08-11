import { Consulta } from "./../types/consulta";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { UserInfo } from "firebase";
import * as firebase from "firebase";
import { Observable } from "rxjs/internal/observable";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../redux/app.store";

export const collections = {
  users: "users",
  consulta: "consultas",
};

export type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
export type DocumentPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: "root",
})
export class FirestoreSyncService {
  consultas: Observable<Consulta[]>;
  consultaRef: AngularFirestoreCollection<Consulta>;

  constructor(public afs: AngularFirestore, private store: Store<AppState>) {
    //this.afs.firestore.settings({ timestampsInSnapshots: true });
    this.consultaRef = this.afs.collection<Consulta>(collections.consulta);
  }

  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === "string" ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  doc<T>(ref: DocumentPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === "string" ? this.afs.doc<T>(ref) : ref;
  }

  doc$<T>(ref: DocumentPredicate<T>): Observable<T> {
    return this.doc(ref)
      .snapshotChanges()
      .pipe(
        map((doc) => {
          return doc.payload.data() as T;
        })
      );
  }

  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((docs) => {
          return docs.map((a) => a.payload.doc.data()) as T[];
        })
      );
  }

  colWithId$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  set<T>(ref: DocumentPredicate<T>, data: any) {
    const timestamp = this.timestamp;
    return this.doc(ref).set({
      ...data,
      updateAt: null,
      createdAt: timestamp,
    });
  }

  update<T>(ref: CollectionPredicate<T>, key: string, data: any) {
    const timestamp = this.timestamp;
    const refDocument = this.doc<T>(`${ref}/${key}`);
    return this.doc<T>(refDocument).set(
      {
        ...data,
        updateAt: timestamp,
      },
      { merge: true }
    );
  }

  public getUserDocRefByUID(uid: string): AngularFirestoreDocument<UserInfo> {
    return this.doc(`${collections.users}/${uid}`);
  }

  public deleteUserData(uid: string): Promise<any> {
    const userRef: AngularFirestoreDocument<UserInfo> = this.getUserDocRefByUID(
      uid
    );
    return userRef.delete();
  }

  public updateUserData(user: any): Promise<any> {
    // Sets user$ data to firestore on login
    const userRef: AngularFirestoreDocument<UserInfo> = this.getUserDocRefByUID(
      user.uid
    );
    const data: any = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      providerId: user.providerId,
    };
    return userRef.set(data, { merge: true });
  }

  public findAllConsultas(size: number) {
    this.consultaRef = this.afs.collection<Consulta>(
      collections.consulta,
      (ref) => ref.orderBy("createdAt", "asc").limit(size)
    );
    return this.consultaRef;
  }

  public findConsulta(obj: Consulta) {
    switch (obj.type) {
      case "Basic":
        this.consultaRef = this.afs.collection<Consulta>(
          collections.consulta,
          (ref) => ref.where("psid", "==", obj.psid)
        );
        break;
      case "Medium":
        this.consultaRef = this.afs.collection<Consulta>(
          collections.consulta,
          (ref) => ref.where("pid", "==", obj.pid).where("k2", "==", obj.k2)
        );
        break;
      case "High":
        this.consultaRef = this.afs.collection<Consulta>(
          collections.consulta,
          (ref) => ref.where("psid", "==", obj.psid).where("pid", "==", obj.pid)
        );
        break;
      default:
        this.consultaRef = this.afs.collection<Consulta>(
          collections.consulta,
          (ref) => ref.where("psid", "==", obj.psid)
        );
    }
    return this.consultaRef;
  }

  public getConsultaDocRefByUID(
    uid: string
  ): AngularFirestoreDocument<Consulta> {
    return this.doc(`${collections.consulta}/${uid}`);
  }

  public updateConsulta(obj: Consulta) {
    const ref: AngularFirestoreDocument<Consulta> = this.getConsultaDocRefByUID(
      obj.uid
    );
    const data: Consulta = {
      uid: obj.uid,
      psid: obj.psid,
      basic: obj.basic,
      pid: obj.pid,
      k2: obj.k2,
      high: obj.high,
      medium: obj.medium,
      updateAt: this.timestamp,
    };
    return ref.set(data, { merge: true });
  }

  public async deleteConsulta(key: string) {
    const ref: AngularFirestoreDocument<Consulta> = this.getConsultaDocRefByUID(
      key
    );
    return await ref.delete();
  }
}
