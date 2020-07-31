import { ActionReducerMap } from "@ngrx/store";

import * as fromApp from "./app.reducers";
import * as fromAuth from "../pages/auth/auth.reducer";
// import * as fromIngresoEgreso from './ingreso-egreso/ingreso-egreso.reducer';
import { uiState } from "./app.state";
import { AuthState } from "../pages/auth/auth.state";
export interface AppState {
  ui: uiState;
  auth: AuthState;
  // ingresoEgreso: fromIngresoEgreso.IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: fromApp.uiReducer,
  auth: fromAuth.authReducer,
  // ingresoEgreso: fromIngresoEgreso.ingresoEgresoReducer
};
