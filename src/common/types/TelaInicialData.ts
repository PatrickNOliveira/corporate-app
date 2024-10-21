import {Dependente} from "./Dependente";

export type TelaInicialData = {
    documentType: string,
    cpf: string,
    passport: string,
    responsibleName: string,
    nationality: string,
    birthdayDate: string,
    dependentes: Dependente[]
}