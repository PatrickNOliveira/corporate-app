import {Clinica} from "./Clinica";
import {Telefone} from "./Telefone";
import {Endereco} from "./Endereco";

export type Usuario = {
    id?: string
    nome: string
    sobrenome: string
    tipo: string
    cpfcnpj: string
    email: string
    senha: string
    escopo: string
    clinica: Clinica
    telefones: Telefone[]
    enderecos: Endereco[]
}
