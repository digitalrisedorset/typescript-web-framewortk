import {Collection} from "./Collection";
import {User, rootUrl} from "./User";
import {UserProps} from "../types";

export class UserCollection extends Collection<User, UserProps> {
    constructor() {
        super(rootUrl, (record: UserProps) => {
            return new User(record)
        });
    }
}