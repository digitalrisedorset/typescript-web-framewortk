import axios, { AxiosPromise } from "axios";
import {DataPersister} from "../types";
import { HasId} from "../types";

export class ApiPersister<T extends HasId> implements DataPersister<T> {
    constructor(private rootUrl: string) {}
    fetch = (id: number): AxiosPromise => {
        return axios.get(`${this.rootUrl}/${id}`)
    }
    save = (data: T): AxiosPromise => {
        const { id } = data

        if (id)
            return axios.put(`${this.rootUrl}/${data.id}`, data)
        else
            return axios.post(this.rootUrl, data)
    }
}