import {EscopoUsuario} from "../enums/EscopoUsuario";
import {PrimeiroCadastroContract} from "../types/PrimeiroCadastroModel";
import {CadastrarDependentesContract} from "../types/CadastrarDependentesModel";
import {CadastrarInformacoesAdicionaisContract} from "../types/InformacoesAdicionaisModel";

export type RootState = {
  usuarioLogado: {
    id?: string;
    access_token?: string;
    nome?: string;
    email?: string;
    escopo?: EscopoUsuario
  };
  realizandoProcessamento: 'ATIVO' | 'PASSIVO' | 'NENHUM';
  snackbar: {
    message: string;
    visible: boolean;
    variant: 'success' | 'error'
  }
  dadosCadastrais: {
    telaInicial?: {
      primeiroCadastro: PrimeiroCadastroContract,
      dependentes: CadastrarDependentesContract[],
    },
    informacoesAdicionais?: CadastrarInformacoesAdicionaisContract
  }[]
};
