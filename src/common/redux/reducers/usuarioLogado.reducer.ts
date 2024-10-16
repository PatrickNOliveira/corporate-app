import {USUARIO_LOGADO} from '../actions/usuarioLogado.actions';
import {RootState} from '../RootState';

export function usuarioLogado(
  usuarioLogado: RootState['usuarioLogado'] = {},
  action: RootState['usuarioLogado'] & {type: string},
): RootState['usuarioLogado'] {
  switch (action.type) {
    case USUARIO_LOGADO.LOGOU:
      return {
        id: action.id,
        access_token: action.access_token,
        nome: action.nome,
        email: action.email,
        escopo: action.escopo,
      };
    case USUARIO_LOGADO.SAIU:
      return {};
    default:
      return usuarioLogado;
  }
}
