import {EntityAttributes} from '../types'

export class Attributes<T> implements EntityAttributes<T> {
    constructor(private data: T) {}

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }
    set = (update: T): void => {
        //Object.assign(this.data, update);
        (<any>Object).assign(this.data, update)
    }
    get getAll(): T {
        return this.data
    }
}