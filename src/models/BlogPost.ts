import {BlogPostProps, UserProps} from "../types";
import {EntityHandler} from "./EntityHandler";
import {Attributes} from "./Attributes";
import {LocalStoragePersistor} from "./LocalStoragePersistor";
import {ApiPersister} from "./ApiPersister";

export const rootUrl = 'http://localhost:3000/blogpost'

export class BlogPost extends EntityHandler<BlogPostProps> {
    constructor(private data: BlogPostProps) {
        super()
        this.attributes = new Attributes<BlogPostProps>(data)
        this.persister = new ApiPersister<BlogPostProps>(rootUrl)
        //this.persister = new LocalStoragePersistor<BlogPostProps>('blogpost')
    }
}
