import {IResponsePadrao} from "../interfaces/ResponsePadrao";
import {BaseApi} from "./BaseApi";

export abstract class CrudApi<T> extends BaseApi {
    protected constructor(path: string) {
        super();
        this.path = path;
    }

    protected path: string;

    public async getAll(): Promise<IResponsePadrao<T[]>> {
        return (await this.api.get(this.path)).data
    }

    public async getOne(id: string): Promise<IResponsePadrao<T>> {
        return (await this.api.get(`${this.path}/${id}`)).data
    }

    public async create(data: T): Promise<IResponsePadrao<T>> {
        return (await this.api.post(`${this.path}`, data)).data
    }

    public async update(data: T, id: string): Promise<IResponsePadrao<T>> {
        return (await this.api.put(`${this.path}/${id}`, data)).data
    }

    public async delete(id: string): Promise<IResponsePadrao<T>> {
        return (await this.api.delete(`${this.path}/${id}`)).data
    }
}