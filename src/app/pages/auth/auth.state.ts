import { UserInfo } from "firebase/app";

export interface AuthState {
  isAuthenticated: boolean;
  user: UserInfo;
  error: any;
}

export const authinitialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};
