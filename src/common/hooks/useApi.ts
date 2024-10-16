import {UsuarioApi} from "../api/UsuarioApi";
import {PetApi} from "../api/PetApi";
import {IbgeApi} from "../api/IbgeApi";
import {ClinicaApi} from "../api/ClinicaApi";
import {PlanoApi} from "../api/PlanoApi";
import { FarmaciaApi } from "../api/FarmaciaApi";
import { AdestradorApi } from "../api/AdestradorApi";

class Api {
    constructor() {
        this.Usuario = new UsuarioApi();
        this.Pet = new PetApi();
        this.IBGE = new IbgeApi();
        this.Clinica = new ClinicaApi();
        this.Plano = new PlanoApi();
        this.Farmacia = new FarmaciaApi();
        this.Adestrador = new AdestradorApi();
    }
    Plano: PlanoApi;
    Usuario: UsuarioApi;
    Clinica: ClinicaApi;
    Pet: PetApi;
    IBGE: IbgeApi;
    Farmacia: FarmaciaApi;
    Adestrador: AdestradorApi;
}

export const useApi = (): Api => {
    return new Api();
}