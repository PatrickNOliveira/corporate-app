import {CrudApi} from "./CrudApi";
import {Clinica, PlanoDesconto} from "../types/Clinica";
import {IResponsePadrao} from "../interfaces/ResponsePadrao";
import { Plano } from "../types/Plano";

export class ClinicaApi extends CrudApi<Clinica> {
    constructor() {
        super('/clinica');
    }

    async filter(values: {
        uf: string,
        cidade: string,
    }): Promise<IResponsePadrao<Clinica[]>> {
        return (await this.api.get(this.path, {
            params: {
                uf: values.uf,
                cidade: values.cidade,
            }
        })).data
    }

    async minha(): Promise<IResponsePadrao<Clinica[]>> {
        return (await this.api.get(`${this.path}/minha`)).data
    }

    async upload(file: any): Promise<any> {
        const formdata = new FormData()
        formdata.append('file', file)
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        const response = await this.api.patch(`${this.path}/logo`, formdata, config);
        return response?.data;
    }

    async planosAceitos(): Promise<IResponsePadrao<PlanoDesconto[]>> {
        return (await this.api.get(`${this.path}/planos`)).data
    }

    async planosNaoAceitos(): Promise<IResponsePadrao<Plano[]>> {
        return (await this.api.get(`/plano/nao-atende`)).data
    }

    async removerPlanoAceito(id: string): Promise<IResponsePadrao<PlanoDesconto>> {
        return (await this.api.delete(`plano-clinica/${id}`)).data
    }

    async adicionarPlanoAceito(values: {
        planoID: string,
        desconto: number
    }): Promise<IResponsePadrao<PlanoDesconto>> {
        return (await this.api.post(`clinica/plano`, values)).data
    }

}