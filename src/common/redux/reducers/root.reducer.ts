import {combineReducers} from 'redux';
import {usuarioLogado} from './usuarioLogado.reducer';
import {realizandoProcessamento} from './realizandoProcessamento.reducer';
import {snackbarReducer} from "./snackbar.reducer";

export const rootReducer = combineReducers({
  usuarioLogado,
  realizandoProcessamento,
  snackbar: snackbarReducer
});
