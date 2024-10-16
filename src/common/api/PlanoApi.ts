import {CrudApi} from "./CrudApi";
import {AssinaturaPet, Plano} from "../types/Plano";
import {AssinarPlanoContract} from "../types/AssinarPlanoContract";
import {IResponsePadrao} from "../interfaces/ResponsePadrao";

export class PlanoApi extends CrudApi<Plano> {
    constructor() {
        super('/plano');
    }

    async assinar(values: AssinarPlanoContract): Promise<IResponsePadrao<AssinaturaPet>> {
        const response = await this.api.post(`${this.path}/assinar`, values)
        return response?.data;
    }
}