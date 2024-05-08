import {Collection} from "./Collection";
import {BlogPost, rootUrl} from "./BlogPost";
import {BlogPostProps} from "../types";

export class BlogPostCollection extends Collection<BlogPost, BlogPostProps> {
    constructor() {
        super(rootUrl, (record: BlogPostProps) => {
            return new BlogPost(record)
        });
    }
}