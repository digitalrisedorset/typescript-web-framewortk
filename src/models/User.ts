import {EventHandler} from "./EventHandler";
import {UserProps} from "../types";
import {DataPersistor} from "./DataPersister";
import {Attributes} from "./Attributes";
import {AxiosResponse} from "axios";

type Callback = () => void;

const rootUrl = 'http://localhost:3000/users'

export class User {
  private events: EventHandler = new EventHandler()
  private persister: DataPersistor<UserProps> = new DataPersistor<UserProps>(rootUrl)
  private attributes: Attributes<UserProps>;

  constructor(private data: UserProps) {
    this.attributes = new Attributes<UserProps>(data)
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
    this.persister.fetch(id).then((response): void => {
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
  get get() {
    return this.attributes.get
  }
  set(update: UserProps): void {
    this.attributes.set(update)
    this.trigger('change')
  }
  get getData(): UserProps {
    return this.data
  }
}
