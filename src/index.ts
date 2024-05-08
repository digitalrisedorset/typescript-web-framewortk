import {User} from './models/User';
import {BlogPost} from "./models/BlogPost";
import {BlogPostProps} from "./types";
import {UserCollection} from "./models/UserCollection";
import {BlogPostCollection} from './models/BlogPostCollection'

const collection = new UserCollection()
collection.fetch()
collection.on('collection_loaded', () => {
    console.log('items', collection.items)
})

// create a user in the API storage
const user = new User({ name: 'Herve', age:45 })
user.save()

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

const collection2 = new BlogPostCollection()
collection2.fetch()
collection2.on('collection_loaded', () => {
    console.log('items', collection2.items)
})