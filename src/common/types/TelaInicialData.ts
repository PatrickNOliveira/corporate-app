import {Dependente} from "./Dependente";

export interface TelaInicialData extends AdditionalInfoData {
    documentType: string,
    cpf: string,
    passport: string,
    responsibleName: string,
    nationality: string,
    birthdayDate: string,
    onlyDependants: boolean,
    dependentes: Dependente[]
}

export type AdditionalInfoData = {
    cell: string
    email: string
}