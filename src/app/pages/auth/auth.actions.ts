import { Action } from "@ngrx/store";
import { ICredentials } from "../../interfaces/main.interface";

export const GET_USER = "[AUTH] Get user";
export const AUTHENTICATED = "[AUTH] Authenticated";
export const NOT_AUTHENTICATED = "[AUTH] Not Authenticated";
export const AUTH_ERROR = "[AUTH] Login Error";

export const LOGIN = "[AUTH] Login User";
export const LOGIN_SUCCESS = "[AUTH] Login Success";

export const REGISTER = "[AUTH] Login User";
export const REGISTER_SUCCESS = "[AUTH] Register Success";

export const LOGOUT = "[AUTH] Logout User";
export const LOGOUT_SUCCESS = "[AUTH] LogOut Success";

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload?: any) {}
}

export class Authenticated implements Action {
  readonly type = AUTHENTICATED;
  constructor(public user?: any) {}
}

export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
  constructor(public user?: any) {}
}

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload?: ICredentials) {}
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public user?: any) {}
}

export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor(public error?: any) {}
}

export class LogOutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class RegisterSuccessAction implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public user?: any) {}
}

export type AuthActions =
  | GetUser
  | Authenticated
  | NotAuthenticated
  | Login
  | LoginSuccessAction
  | AuthError
  | LogOutSuccessAction
  | RegisterSuccessAction;
