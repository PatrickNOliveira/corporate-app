import {combineReducers} from 'redux';
import {usuarioLogado} from './usuarioLogado.reducer';
import {realizandoProcessamento} from './realizandoProcessamento.reducer';
import {snackbarReducer} from "./snackbar.reducer";
import {dadosCadastrais} from "./dadosCadastrais.reducer";

export const rootReducer = combineReducers({
  usuarioLogado,
  realizandoProcessamento,
  dadosCadastrais,
  snackbar: snackbarReducer
});
