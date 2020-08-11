// This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
import { InjectionToken } from "@angular/core";
import { AuthFirebaseUIConfig } from "../interfaces";

export const AuthFirebaseUIConfigToken = new InjectionToken<
  AuthFirebaseUIConfig
>("AuthFirebaseUIConfigToken");
// This is an intermediate token containing only user-provided configuration
export const UserProvidedConfigToken = new InjectionToken<AuthFirebaseUIConfig>(
  "UserProvidedConfigToken"
);
