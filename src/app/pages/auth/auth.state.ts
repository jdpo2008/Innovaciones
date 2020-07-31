import { UserInfo } from "firebase/app";

export interface AuthState {
  isAuthenticated: Boolean;
  user: UserInfo;
  error: any;
}

export const authinitialState: AuthState = {
  isAuthenticated: true,
  user: null,
  error: null,
};
