import {Plano} from "./Plano";

export interface Clinica {
    id?: string
    nome: string
    cpfcnpj: string | null
    inscMunicipal: any
    cep: string
    logradouro: string
    bairro: string
    cidade: string
    complemento: string
    uf: string
    numero: string
    telefone1: string
    telefone2: string
    telefone3: string
    site: string
    email: string
    logo: any
    usuarioId: string
    planoDesconto: PlanoDesconto[]
}
export interface PlanoDesconto {
    id: string
    planoID: string
    desconto: string
    clinicaId: string
    plano: Plano
}