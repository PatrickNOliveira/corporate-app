import {RootState} from '../RootState';
import {DADOS_CADASTRAIS} from "../actions/dadosCadastrais";

export function dadosCadastrais(
    dadosCadastrais: RootState['dadosCadastrais'] = [],
    action: RootState['dadosCadastrais'] & { type: string, novoDado?: any },
): RootState['dadosCadastrais'] {
  switch (action.type) {
    case DADOS_CADASTRAIS.SALVAR_TELA_INICIAL:
      return [
        ...dadosCadastrais,
        action.novoDado,
      ];
    case DADOS_CADASTRAIS.LIMPAR:
      return [];
    default:
      return dadosCadastrais;
  }
}
