import * as fromApp from "./app.actions";
import { uiState, uiInitState } from "./app.state";

export function uiReducer(
  state = uiInitState,
  action: fromApp.acciones
): uiState {
  switch (action.type) {
    case fromApp.ACTIVAR_LOADING:
      return {
        isLoading: true,
      };

    case fromApp.DESACTIVAR_LOADING:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
}
