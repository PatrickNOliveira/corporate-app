import {CrudApi} from "./CrudApi";
import {Usuario} from "../types/Usuario";
import {LoginResponse} from "../types/LoginResponse";
import {LoginContract} from "../types/LoginContract";

export class UsuarioApi extends CrudApi<Usuario> {
    constructor() {
        super('/usuario');
    }

    async login(data: LoginContract): Promise<LoginResponse> {
        return (await this.api.post('/auth/login', data)).data
    }

    async emailSenha(data: {email: string}): Promise<any> {
        return (await this.api.post('/usuario/forgot-my-password', data)).data
    }

    async novaSenha(data: {token: string, newPassword: string}): Promise<any> {
        return (await this.api.post('/usuario/reset-password', data)).data
    }
}