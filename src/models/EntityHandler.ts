import {AxiosResponse} from "axios";
import {DataPersister, EntityAttributes, Events, HasId, UserProps} from "../types";
import {EventHandler} from "./EventHandler";
import {Collection} from "./Collection";

export class EntityHandler<T extends HasId> {
    protected events: Events
    protected persister: DataPersister<T>
    protected attributes: EntityAttributes<T>;

    constructor() {
        this.events = new EventHandler()
    }
    get on() {
        return this.events.on
    }
    get trigger() {
        return this.events.trigger
    }
    fetch(): void {
        const id = this.get('id')
        if (typeof id !== 'number') {
            throw new Error('The id cannot be null to call the fetch method')
        }
        const response = this.persister.fetch(id).then((response): void => {
            this.set(response.data)
        })
    }
    save(): void {
        this.persister.save(this.attributes.getAll)
        .then((response: AxiosResponse) => {
            this.trigger('save')
        })
        .catch(() => {
            this.trigger('error')
        })
}
    get = <K extends keyof T>(key: K): T[K] => {
        return this.attributes.get(key)
    }
    set(update: T): void {
        this.attributes.set(update)
        this.trigger('change')
    }
}