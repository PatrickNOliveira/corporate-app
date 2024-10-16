import {IBGEMunicipios} from "../types/IBGEMunicipios";
import axios from "axios";

export class IbgeApi {
   async obterMunicipios(estado: string): Promise<IBGEMunicipios[]> {
       return (await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)).data
   }
}