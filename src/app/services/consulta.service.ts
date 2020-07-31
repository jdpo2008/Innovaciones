import { Injectable } from "@angular/core";
import { AlertService } from "./alert.service";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Consulta, Type } from "../types/consulta";
import { Observable } from "rxjs";

var collection = {
  name: "/consultas",
};

@Injectable({
  providedIn: "root",
})
export class ConsultaService {
  consultas: Observable<Consulta[]>;
  consultaRef: AngularFirestoreCollection<Consulta> = null;

  constructor(public afs: AngularFirestore, public toast: AlertService) {}

  findAllConsultas(size: number) {
    this.consultaRef = this.afs.collection(collection.name, (ref) =>
      ref.orderBy("createdAt", "asc").limit(size)
    );
    return this.consultaRef;
  }

  findConsulta(obj: Consulta) {
    switch (obj.type) {
      case "Basic":
        this.consultaRef = this.afs.collection(collection.name, (ref) =>
          ref.where("psid", "==", obj.psid)
        );
        break;
      case "Medium":
        this.consultaRef = this.afs.collection(collection.name, (ref) =>
          ref.where("pid", "==", obj.pid).where("k2", "==", obj.k2)
        );
        break;
      case "High":
        this.consultaRef = this.afs.collection(collection.name, (ref) =>
          ref.where("psid", "==", obj.psid).where("pid", "==", obj.pid)
        );
        break;
      default:
        this.consultaRef = this.afs.collection(collection.name, (ref) =>
          ref.where("psid", "==", obj.psid)
        );
    }
    return this.consultaRef;
  }

  addConsulta(obj: Consulta) {
    return this.consultaRef.add({ ...obj });
  }

  updateConsulta(key: string, value: any) {
    return this.consultaRef.doc(key).update(value);
  }

  deleteConsulta(key: string) {
    return this.consultaRef.doc(key).delete();
  }
}