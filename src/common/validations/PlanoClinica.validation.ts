import * as Yup from "yup";

export const PlanoClinicaValidation = Yup.object().shape({
    desconto: Yup.string().required('Campo obrigatório').min(1, 'Deve ser maior ou igual a 1'),
});
