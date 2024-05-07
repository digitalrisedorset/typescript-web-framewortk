interface UserData {
    name?: string;
    age?: number;
}

type Callback = () => void

export class User {
    events: { [key:string]: Callback }[] = [{}]
    constructor(private data: UserData) {}
    get(attribute: string): number|string {
        return this.data[attribute]
    }
    set(update: UserData): void {
        Object.assign(this.data, update)
    }
    on(eventName: string, callback: Callback) {
        const handlers: [] = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }
    trigger(eventName: string): void {
        const handlers = this.events[eventName]
        //console.log('handlers', handlers)
        if (handlers === undefined || handlers.length === 0) {
            return
        }

        handlers.forEach(callback => callback())
    }
}