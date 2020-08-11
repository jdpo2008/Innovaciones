import { ConsultaType } from "./../../types/consulta";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Consulta } from "../../types/consulta";
import { FirestoreSyncService } from "../../services/firestore-sync.service";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { AlertService } from "../../services/alert.service";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../redux/app.store";
import {
  ActivarLoadingAction,
  DesactivarLoadingAction,
} from "../../redux/app.actions";
import { CONSULTA_ENUM } from "../../enums";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styles: [],
})
export class ConsultaComponent implements OnInit {
  tabindex1: number;
  tabindex2: number;
  like: number;
  unLike: number;
  formBasic: FormGroup;
  formMedium: FormGroup;
  formHigh: FormGroup;
  formBasicCreate: FormGroup;
  formMediumCreate: FormGroup;
  formHighCreate: FormGroup;
  resultado: string;
  consultaRef: AngularFirestoreCollection<Consulta>;
  consultas: Consulta[];
  exist: boolean;
  findExist: boolean;
  consultaSubscription: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private firestoreSerive: FirestoreSyncService,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.tabindex1 = 0;
    this.tabindex2 = 0;
    this.like = 0;
    this.unLike = 0;
    this.resultado = "";
    this.onFormBasicInit();
    this.onFormMediumInit();
    this.onFormHighInit();
    this.onFormBasicCreateInit();
    this.onFormMediumCreateInit();
    this.onFormHighCreateInit();
  }

  setIndex1(event) {
    this.tabindex1 = event;
    this.formBasic.reset();
    this.formMedium.reset();
    this.formHigh.reset();
    this.findExist = false;
    this.resultado = "";
  }

  setIndex2(event) {
    this.tabindex2 = event;
    this.formBasicCreate.reset();
    this.formMediumCreate.reset();
    this.formHighCreate.reset();
  }

  public onLike() {
    const consulta: Consulta = {
      uid: this.consultas[0].uid,
      like: this.like++,
    };
    try {
      this.firestoreSerive
        .update<Consulta>("consultas", this.consultas[0].uid, consulta)
        .then((like) => {
          console.log(like);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public onUnLike() {
    const consulta: Consulta = {
      uid: this.consultas[0].uid,
      unlike: this.unLike++,
    };
    try {
      this.firestoreSerive
        .update<Consulta>("consultas", this.consultas[0].uid, consulta)
        .then((like) => {
          console.log(like);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async onFind(type: ConsultaType) {
    const { ctype, queryFn, formInValid } = this.getTypeConsulta(type);
    if (formInValid) return;
    this.store.dispatch(new ActivarLoadingAction());
    try {
      let refConsulta = this.firestoreSerive.col$<Consulta>(
        "consultas",
        queryFn
      );
      refConsulta.subscribe((data) => {
        this.store.dispatch(new DesactivarLoadingAction());
        if (data.length > 0) {
          this.findExist = true;
          this.consultas = data;
          this.resultado = this.getDataResult(type, data);
          this.like = null ? 0 : data[0].like;
          this.unLike = null ? 0 : data[0].unlike;
        } else {
          this.findExist = false;
          this.consultas = null;
          this.resultado = `No existe ${ctype}`;
        }
      });
    } catch (error) {
      this.store.dispatch(new DesactivarLoadingAction());
      this.alertService.setMensaje(
        "error",
        "OPS!",
        `Error al realizar la Consulta, Error: ${error}`,
        5000
      );
    }
  }

  public async onRegister(type: ConsultaType) {
    if (this.formBasicCreate.invalid) return true;
    this.store.dispatch(new ActivarLoadingAction());
    try {
      const uid = this.firestoreSerive.afs.createId();
      const consulta: Consulta = {
        uid,
        psid: this.formBasicCreate.controls.psid.value,
        basic: this.formBasicCreate.controls.basic.value,
        like: 0,
        unlike: 0,
      };

      let citiesRef = await this.firestoreSerive.afs
        .collection<Consulta>("consultas", (ref) =>
          ref.where("psid", "==", this.formBasicCreate.controls.psid.value)
        )
        .snapshotChanges()
        .pipe(
          map((docs) => {
            return docs.map((a) => a.payload.doc.data()) as Consulta[];
          })
        );

      citiesRef.subscribe((data) => {
        if (data.length > 0) {
          this.exist = true;
        } else {
          this.exist = false;
        }
      });

      if (this.exist) {
        this.store.dispatch(new DesactivarLoadingAction());
        this.alertService.setMensaje(
          "warning",
          "OPS!",
          `Ya el PSID existe verifica en la BD`,
          5000
        );
      } else {
        this.firestoreSerive
          .set<Consulta>(`consultas/${uid}`, consulta)
          .then(() => {
            this.store.dispatch(new DesactivarLoadingAction());
            this.formBasicCreate.reset();
            this.alertService.setMensaje(
              "success",
              "Excelente!",
              `Se registró ${type} correctamente`,
              5000
            );
          });
      }
    } catch (error) {
      this.store.dispatch(new DesactivarLoadingAction());
      this.alertService.setMensaje(
        "error",
        "OPS!",
        `Error al Registar Consulta, Error: ${error}`,
        5000
      );
    }
  }

  public async onRegisterMedium(type: ConsultaType) {
    if (this.formMediumCreate.invalid) return true;
    this.store.dispatch(new ActivarLoadingAction());

    try {
      const uid = this.firestoreSerive.afs.createId();
      const consulta: Consulta = {
        uid,
        k2: this.formMediumCreate.controls.k2.value,
        pid: this.formMediumCreate.controls.pid.value,
        medium: this.formMediumCreate.controls.medium.value,
        like: 0,
        unlike: 0,
      };
      let consultaRef = await this.firestoreSerive.afs
        .collection<Consulta>("consultas", (ref) =>
          ref
            .where("pid", "==", this.formMediumCreate.controls.pid.value)
            .where("k2", "==", this.formMediumCreate.controls.k2.value)
        )
        .snapshotChanges()
        .pipe(
          map((docs) => {
            return docs.map((a) => a.payload.doc.data()) as Consulta[];
          })
        );

      consultaRef.subscribe((data) => {
        if (data.length > 0) {
          this.exist = true;
        } else {
          this.exist = false;
        }
      });

      if (this.exist) {
        this.store.dispatch(new DesactivarLoadingAction());
        this.alertService.setMensaje(
          "warning",
          "OPS!",
          `Ya el K2 existe verifica en la BD`,
          5000
        );
      } else {
        this.firestoreSerive
          .set<Consulta>(`consultas/${uid}`, consulta)
          .then(() => {
            this.store.dispatch(new DesactivarLoadingAction());
            this.formMediumCreate.reset();
            this.alertService.setMensaje(
              "success",
              "Excelente!",
              `Se registró ${type} correctamente`,
              5000
            );
          });
      }
    } catch (error) {
      this.store.dispatch(new DesactivarLoadingAction());
      this.alertService.setMensaje(
        "error",
        "OPS!",
        `Error al Registar Consulta, Error: ${error}`,
        5000
      );
    }
  }

  public async onRegisterHigh(type: string) {
    if (this.formHighCreate.invalid) return true;
    this.store.dispatch(new ActivarLoadingAction());

    try {
      const uid = this.firestoreSerive.afs.createId();
      const consulta: Consulta = {
        uid,
        psid: this.formHighCreate.controls.psid.value,
        pid: this.formHighCreate.controls.pid.value,
        high: this.formHighCreate.controls.high.value,
        like: 0,
        unlike: 0,
      };
      let consultaRef = await this.firestoreSerive.afs
        .collection<Consulta>("consultas", (ref) =>
          ref
            .where("psid", "==", this.formHighCreate.controls.psid.value)
            .where("pid", "==", this.formHighCreate.controls.pid.value)
        )
        .snapshotChanges()
        .pipe(
          map((docs) => {
            return docs.map((a) => a.payload.doc.data()) as Consulta[];
          })
        );

      consultaRef.subscribe((data) => {
        if (data.length > 0) {
          this.exist = true;
        } else {
          this.exist = false;
        }
      });

      if (this.exist) {
        this.store.dispatch(new DesactivarLoadingAction());
        this.alertService.setMensaje(
          "warning",
          "OPS!",
          `Ya el Psid existe verifica en la BD`,
          5000
        );
      } else {
        this.firestoreSerive
          .set<Consulta>(`consultas/${uid}`, consulta)
          .then(() => {
            this.store.dispatch(new DesactivarLoadingAction());
            this.formHighCreate.reset();
            this.alertService.setMensaje(
              "success",
              "Excelente!",
              `Se registró ${type} correctamente`,
              5000
            );
          });
      }
    } catch (error) {
      this.store.dispatch(new DesactivarLoadingAction());
      this.formHighCreate.reset();
      this.alertService.setMensaje(
        "error",
        "OPS!",
        `Error al Registar Consulta, Error: ${error}`,
        5000
      );
    }
  }

  private onFormBasicInit() {
    this.formBasic = this.fb.group({
      psid: ["", [Validators.required]],
    });
  }

  private onFormMediumInit() {
    this.formMedium = this.fb.group({
      k2: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      pid: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
    });
  }

  private onFormHighInit() {
    this.formHigh = this.fb.group({
      psid: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      pid: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
    });
  }

  private onFormBasicCreateInit() {
    this.formBasicCreate = this.fb.group({
      psid: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      basic: [
        "",
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
    });
  }

  private onFormMediumCreateInit() {
    this.formMediumCreate = this.fb.group({
      k2: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      pid: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      medium: [
        "",
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
    });
  }

  private onFormHighCreateInit() {
    this.formHighCreate = this.fb.group({
      psid: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      pid: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      high: [
        "",
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      ],
    });
  }

  private getTypeConsulta(type: ConsultaType) {
    let ctype = "";
    let queryFn;
    let formInValid: boolean;
    switch (type) {
      case CONSULTA_ENUM.basic: {
        ctype = "Basic";
        queryFn = (ref) =>
          ref.where("psid", "==", this.formBasic.controls.psid.value);
        formInValid = this.formBasic.invalid;
        break;
      }
      case CONSULTA_ENUM.medium: {
        ctype = "Medium";
        queryFn = (ref) =>
          ref
            .where("pid", "==", this.formMedium.controls.pid.value)
            .where("k2", "==", this.formMedium.controls.k2.value);
        formInValid = this.formMedium.invalid;
        break;
      }
      case CONSULTA_ENUM.high: {
        ctype = "High";
        queryFn = (ref) =>
          ref
            .where("psid", "==", this.formHigh.controls.psid.value)
            .where("pid", "==", this.formHigh.controls.pid.value);
        formInValid = this.formHigh.invalid;
        break;
      }
      default: {
        ctype = "";
      }
    }
    return { ctype, queryFn, formInValid };
  }

  private getDataResult(type: ConsultaType, data: any) {
    let result = "";
    switch (type) {
      case CONSULTA_ENUM.basic: {
        result = data[0].basic;
        break;
      }
      case CONSULTA_ENUM.medium: {
        result = data[0].medium;
        break;
      }
      case CONSULTA_ENUM.high: {
        result = data[0].high;
        break;
      }
      default: {
        result = "";
      }
    }
    return result;
  }
}
