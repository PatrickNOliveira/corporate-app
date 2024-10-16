import * as Yup from "yup";

export const PetValidation = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
});
