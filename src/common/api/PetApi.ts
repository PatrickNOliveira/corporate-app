import {CrudApi} from "./CrudApi";
import {Pet} from "../types/Pet";
import {IResponsePadrao} from "../interfaces/ResponsePadrao";

export class PetApi extends CrudApi<Pet> {
    constructor() {
        super('/pet');
    }

    async upload(petId: string, file: any): Promise<any> {
        const formdata = new FormData()
        formdata.append('petId', petId)
        formdata.append('file', file)
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        const response = await this.api.post(`/fotos-pet`, formdata, config);
        return response?.data;
    }

    async buscarParaReproducao(values: {
        raca: string,
        uf: string,
        cidade: string,
        especie: string,
        sexo: string,
    }): Promise<IResponsePadrao<Pet[]>> {
        const response = await this.api.get(`${this.path}/reproducao`, {
            params: {
                especie: values.especie,
                raca: values.raca,
                uf: values.uf,
                cidade: values.cidade,
                sexo: values.sexo
            }
        })
        return response.data
    }
}