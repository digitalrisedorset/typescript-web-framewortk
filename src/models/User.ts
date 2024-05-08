import {UserProps} from "../types";
import {EntityHandler} from "./EntityHandler";
import {Attributes} from "./Attributes";
import {ApiPersister} from "./ApiPersister";
import {LocalStoragePersistor} from "./LocalStoragePersistor";
import {Collection} from "./Collection";

export const rootUrl = 'http://localhost:3000/users'

export class User extends EntityHandler<UserProps> {
  constructor(private data: UserProps) {
    super()
    this.attributes = new Attributes<UserProps>(data)
    this.persister = new ApiPersister<UserProps>(rootUrl)
    //this.persister = new LocalStoragePersistor<UserProps>('user')
  }
}
