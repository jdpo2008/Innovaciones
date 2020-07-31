import { Action } from "@ngrx/store";
import { UserInfo } from "firebase/app";

export const LOGIN_SUCCESS = "[AUTH] Login Success";
export const LOGIN_ERROR = "[AUTH] Login Error";

export const LOGOUT_SUCCESS = "[AUTH] LogOut Success";
export const LOGOUT_ERROR = "[AUTH] LogOut Error";

export const REGISTER_SUCCESS = "[AUTH] Register Success";
export const REGISTER_ERROR = "[AUTH] Register Error";

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public user: UserInfo) {}
}

export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;
  constructor(public error: any) {}
}

export class LogOutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class LogOutErrorAction implements Action {
  readonly type = LOGOUT_ERROR;
  constructor(public error: any) {}
}

export class RegisterSuccessAction implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public user: UserInfo) {}
}

export class RegisterErrorAction implements Action {
  readonly type = REGISTER_ERROR;
  constructor(public error: any) {}
}

export type AuthActions =
  | LoginSuccessAction
  | LoginErrorAction
  | LogOutSuccessAction
  | LogOutErrorAction
  | RegisterSuccessAction
  | RegisterErrorAction;
