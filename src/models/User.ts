import {EventHandler} from "./EventHandler";
import {UserProps} from "../types";
import {DataPersistor} from "./DataPersister";
import {Attributes} from "./Attributes";

type Callback = () => void;

const rootUrl = 'http://localhost:3000/users'

export class User {
  events: EventHandler = new EventHandler()
  persister: DataPersistor<UserProps> = new DataPersistor<UserProps>(rootUrl)
  attributes: Attributes<UserProps>;

  constructor(private data: UserProps) {
    this.attributes = new Attributes<UserProps>(data)
  }
  get on() {
    return this.events.on
  }
  get trigger() {
    return this.events.trigger
  }
  get fetch() {
    return this.persister.fetch
  }
  get save() {
    return this.persister.save
  }
  get get() {
    return this.attributes.get
  }
  get set() {
    return this.attributes.set
  }
  get getData(): UserProps {
    return this.data
  }
}
