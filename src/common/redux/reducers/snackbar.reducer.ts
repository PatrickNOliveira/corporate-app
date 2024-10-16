import {RootState} from '../RootState';
import {SNACKBAR} from "../actions/snackbar.actions";

export function snackbarReducer(
  snackbarState: RootState['snackbar'] = { message: '', visible: false, variant: 'success'},
  action: {
    type: string;
    snackbarState: RootState['snackbar'];
  },
): RootState['snackbar'] {
  switch (action.type) {
    case SNACKBAR.MOSTRAR:
      return { message: (action as any).message, visible: true, variant: (action as any).variant };
    case SNACKBAR.ESCONDER:
      return { ...snackbarState, visible: false, variant: 'success' };
    default:
      return snackbarState;
  }
}
