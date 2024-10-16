import * as Yup from "yup";

export const UsuarioValidation = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    sobrenome: Yup.string().required('Campo obrigatório'),
    cpfcnpj: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório').email('Formato inválido'),
    senha: Yup.string().required('Campo obrigatório'),
});