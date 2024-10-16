import {Usuario} from "./Usuario";
import {AssinaturaPet} from "./Plano";

export interface Pet {
    id: string
    nome: string
    sexo?: 'Macho' | 'Fêmea'
    nascimento?: string
    pelagem: string
    corPelagem: string
    especie: string
    raca: string
    castrado: boolean
    vivo: boolean
    microchip?: string
    obs?: string
    usuarioId: string
    usuario?: Usuario;
    image?: any
    fotos?: FotoPet[]
    assinatura?: AssinaturaPet[]
}


export interface FotoPet {
    id: string
    petId: string
    url: string
}

