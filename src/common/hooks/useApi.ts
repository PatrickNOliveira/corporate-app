import { CadastroApi } from "../api/CadastroApi";

class Api {
    constructor() {
        this.Cadastro = new CadastroApi();
    }
    Cadastro: CadastroApi;
}

export const useApi = (): Api => {
    return new Api();
}