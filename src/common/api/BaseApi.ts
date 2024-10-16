import axios, { AxiosInstance } from 'axios';
import { RootState } from '../redux/RootState';
import { store } from '../redux/store';

let usuarioLogado: RootState['usuarioLogado'];
store.subscribe(() => {
    usuarioLogado = store.getState().usuarioLogado;
});

export class BaseApi {
    protected api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: "https://pet-production-b1a624c86894.herokuapp.com",
            //baseURL: "http://192.168.0.21:3000",
            headers: {
                Accept: 'application/json',
                Content: 'application/json',
            },
        });

        this.api.interceptors.request.use(
            (config): any => {
                if (usuarioLogado?.access_token) {
                    if (config.headers) {
                        config.headers.Authorization = `Bearer ${usuarioLogado.access_token}`;
                    }
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }
}
