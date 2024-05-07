import {AxiosPromise} from "axios";

export interface UserProps {
    id?: number
    name?: string;
    age?: number;
}

export interface Persister<T> {
    save(data: T): AxiosPromise;
    fetch(id: number): AxiosPromise;
}