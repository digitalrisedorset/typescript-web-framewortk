import axios, { AxiosPromise } from "axios";
import {Events, UserProps} from "../types";
import {EventHandler} from "./EventHandler";
import { AxiosResponse } from "axios";

export class Collection<T, K> {
    protected events: Events

    items: T[] = [];
    constructor(protected rootUrl: string, public deserialize: (json: K) => T) {
        this.events = new EventHandler()
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    fetch(): void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((record: UserProps) => {
                    const item = this.deserialize(record as K) as T
                    this.items.push(item)
                })
                this.trigger('collection_loaded')
                return response.data
            });
    }
}