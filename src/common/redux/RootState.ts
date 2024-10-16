import {EscopoUsuario} from "../enums/EscopoUsuario";

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
};
