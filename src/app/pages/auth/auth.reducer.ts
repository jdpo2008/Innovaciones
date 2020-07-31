import * as fromAuth from "./auth.actions";
import { authinitialState, AuthState } from "./auth.state";

export function authReducer(
  state = authinitialState,
  action: fromAuth.AuthActions
): AuthState {
  switch (action.type) {
    case fromAuth.LOGIN_SUCCESS:
      return {
        user: { ...action.user },
        isAuthenticated: true,
        error: null,
      };

    case fromAuth.LOGIN_ERROR:
      return {
        user: null,
        isAuthenticated: false,
        error: { ...action.error },
      };
    case fromAuth.LOGOUT_SUCCESS:
      return {
        user: null,
        isAuthenticated: false,
        error: null,
      };
    case fromAuth.LOGOUT_ERROR:
      return {
        user: null,
        isAuthenticated: false,
        error: { ...action.error },
      };

    default:
      return state;
  }
}
