import {DataPersister} from "../types";
import { HasId} from "../types";
import {AxiosPromise} from "axios";

export class LocalStoragePersistor<T extends HasId> implements DataPersister<T> {
    constructor(private rootUrl: string) {}
    fetch = (id: number): AxiosPromise => {
        const resolve = (id: number): T => {
            return localStorage.getItem(`${this.rootUrl}_${id}`) as T
        }
        const reject = () => {console.log('error')}

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const response = resolve(id)
                    return  {
                        data: response
                    }
                } catch (e) {
                    reject()
                }
            }, 100)
        })
    }
    save = (data: T): AxiosPromise => {
        let { id } = data

        const resolve = (id: number, data: T): void => {
            console.log(`trigger resolve for save with ${id} and ${data}`)
            localStorage.setItem(`${this.rootUrl}_${id}`, JSON.stringify(data))
        }
        const reject = () => {console.log('error')}

        if (typeof id !== 'number') {
            id = new Date().valueOf();
            data.id = id
        }

        return new Promise((resolve, reject): void => {
            setTimeout(() => {
                try {
                    const response = resolve(id, data)
                    return  {
                        data: response
                    }
                } catch (e) {
                    reject()
                }
            }, 100)
        })
    }
}