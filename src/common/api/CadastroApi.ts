import {BaseApi} from "./BaseApi";
import {PrimeiroCadastroContract, PrimeiroCadastroResponse} from "../types/PrimeiroCadastroModel";
import {CadastrarDependentesContract, CadastrarDependentesResponse} from "../types/CadastrarDependentesModel";
import {CadastrarInformacoesAdicionaisContract} from "../types/InformacoesAdicionaisModel";

export class CadastroApi extends BaseApi {
    constructor() {
        super();
    }

    async primeiroCadastro(values: PrimeiroCadastroContract): Promise<PrimeiroCadastroResponse> {
        return (await this.api.post('/quick-insured-client', values)).data
    }

    async dependentes(data: CadastrarDependentesContract, hashCliente: string): Promise<CadastrarDependentesResponse> {
        return (await this.api.post(`/quick-insured-client/${hashCliente}/dependant`, data)).data
    }

    async extraInfo(data: CadastrarInformacoesAdicionaisContract, hashCliente: string): Promise<CadastrarInformacoesAdicionaisContract> {
        return (await this.api.post(`/quick-insured-client/updateExtraInfo/${hashCliente}`, data)).data
    }
}