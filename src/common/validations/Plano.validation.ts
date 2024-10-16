import * as Yup from "yup";

export const PlanoValidation = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    valor: Yup.number().required('Campo obrigatório').min(1, 'Deve ser maior ou igual a 1'),
});
