import { Action } from "@ngrx/store";
import { Consulta } from "../../types/consulta";

export const GET_CONSULTA = "[CONSULTA] Obtener consulta";
export const ADD_CONSULTA = "[CONSULTA] Agregar consulta";

export const GET_CONSULTA_SUCCESS = "[CONSULTA] Obtener consulta Success";
export const GET_CONSULTA_ERROR = "[CONSULTA] Obtener consulta error";

export const ADD_CONSULTA_SUCCESS = "[CONSULTA] Agregar consulta Success";
export const ADD_CONSULTA_ERROR = "[CONSULTA] Agregar consulta Error";

export class GetConsulta implements Action {
  readonly type = GET_CONSULTA;
  constructor(public consulta: Consulta) {}
}

export class GetConsultaSuccess implements Action {
  readonly type = GET_CONSULTA_SUCCESS;
}

export class GetConsultaError implements Action {
  readonly type = GET_CONSULTA_ERROR;
}

export class AddConsulta implements Action {
  readonly type = GET_CONSULTA;
  constructor(public consulta: Consulta) {}
}

export class AddConsultaSuccess implements Action {
  readonly type = ADD_CONSULTA_SUCCESS;
}

export class AddConsultaError implements Action {
  readonly type = ADD_CONSULTA_ERROR;
}

export type ConsultaActions =
  | GetConsulta
  | GetConsultaSuccess
  | GetConsultaError
  | AddConsulta
  | AddConsultaSuccess
  | AddConsultaError;
