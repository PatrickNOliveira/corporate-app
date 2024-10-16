import {CrudApi} from "./CrudApi";
import {IResponsePadrao} from "../interfaces/ResponsePadrao";
import { Farmacia } from "../types/Farmacia";

export class FarmaciaApi extends CrudApi<Farmacia> {
    constructor() {
        super('/farmacia-manipulacao');
    }

    async filter(values: {
        uf: string,
        cidade: string,
    }): Promise<IResponsePadrao<Farmacia[]>> {
        return (await this.api.get(this.path, {
            params: {
                uf: values.uf,
                cidade: values.cidade,
            }
        })).data
    }
}