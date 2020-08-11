import * as fromAuth from "./auth.actions";
import { authinitialState, AuthState } from "./auth.state";
import { AppState } from "../../redux/app.store";

export namespace UsersQuery {
  export const getUser = (state: AppState) => state.auth.user;
}

export function authReducer(
  state = authinitialState,
  action: fromAuth.AuthActions
): AuthState {
  switch (action.type) {
    case fromAuth.GET_USER:
      return { ...state, user: { ...action.payload } };

    case fromAuth.AUTHENTICATED:
      return { ...state, user: { ...action.user }, isAuthenticated: true };

    case fromAuth.NOT_AUTHENTICATED:
      return { ...state };

    case fromAuth.LOGIN_SUCCESS:
      return {
        user: { ...action.user },
        isAuthenticated: true,
        ...state,
      };

    case fromAuth.AUTH_ERROR:
      return {
        ...state,
        error: { ...action.error },
      };

    case fromAuth.LOGOUT_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
