import {Clinica} from "./Clinica";
import {Pet} from "./Pet";

export interface Plano {
    id: string
    nome: string
    valor: number
    descontoClinica: DescontoClinica[]
}

export interface DescontoClinica {
    id: string
    planoID: string
    desconto: string
    clinicaId: string
    plano: Plano
    clinica: Clinica
}


export interface AssinaturaPet {
    id: string
    linkPagamento: string
    mercadoPagoId: string
    pet: Pet
    petId: string
    plano: Plano
    planoId: string
}
