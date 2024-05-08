import {AxiosPromise} from "axios";

export interface HasId {
    id?: number
}

export interface UserProps {
    id?: number
    name?: string;
    age?: number;
}

export interface BlogPostProps {
    id?: number
    title: string;
    content?: number;
    last_date_update?: Date
    author?: string
}

export interface DataPersister<T> {
    save(data: T): AxiosPromise;
    fetch(id: number): AxiosPromise;
}

export type Callback = () => void;

export interface EntityAttributes<T> {
    get<K extends keyof T>(key: K): T[K];
    set(update: T): void;
    get getAll(): T
}

export interface Events {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}