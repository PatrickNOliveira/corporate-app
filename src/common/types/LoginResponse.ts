import {EscopoUsuario} from "../enums/EscopoUsuario";

export type LoginResponse = {
    access_token: string
    nome: string
    email: string
    escopo: EscopoUsuario
    id: string
}
