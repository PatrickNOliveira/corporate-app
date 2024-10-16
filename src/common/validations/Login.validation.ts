import * as Yup from "yup";

export const LoginValidation = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório').email('Formato inválido'),
    senha: Yup.string().required('Campo obrigatório'),
});