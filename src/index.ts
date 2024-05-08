import {User} from './models/User';
import {BlogPost} from "./models/BlogPost";
import {BlogPostProps} from "./types";

// create a user in the API storage
const user = new User({ name: 'Herve', age:45 })
user.save()

user.fetch()
console.log('user ' ,user.get('name'))

// create a blog post in the local storage
const blogPost = new BlogPost({
    title: 'best article',
    content: 'lorem ipsum',
    last_date_update: new Date(),
    author: 'me'
} as BlogPostProps)

// update the blog post in the local storage
blogPost.set({title: 'new title'})
blogPost.save()

// read the blog post title
console.log(blogPost.get('title'))