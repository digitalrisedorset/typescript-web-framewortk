"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
var User_1 = require("./models/User");
var user = new User_1.User({ name: 'Herve', age: 45 });
user.save();
user.on('change', function () {
    console.log('test');
});
//
user.fetch();
console.log(user.get('name'));
// const blogPost = new BlogPost({
//     title: 'best article',
//     content: 'lorem ipsum',
//     last_date_update: new Date(),
//     author: 'me'
// } as BlogPostProps)
//
// blogPost.set({title: 'new title'} as BlogPostProps)
//
// blogPost.save()
//
// console.log(blogPost.get('title'))
