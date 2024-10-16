import {CrudApi} from "./CrudApi";
import {IResponsePadrao} from "../interfaces/ResponsePadrao";
import { Farmacia } from "../types/Farmacia";

export class AdestradorApi extends CrudApi<Farmacia> {
    constructor() {
        super('/adestrador');
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