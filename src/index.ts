import {User} from './models/User'

const user = new User({name: 'Herve', age:34})
console.log(`User ${user.get('name')} was created and the age is ${user.get('age')}`)

user.set({name:'Patrick'})
console.log(`User has changed ${user.get('name')} was created and the age is ${user.get('age')}`)

user.on('change', () => {
    console.log('I am born');
})

user.on('change', () => {
    console.log('I am young');
})

user.on('change', () => {
    console.log('I am old');
})

user.on('change', () => {
    console.log('I am dead');
})

user.on('birthagain', () => {
    console.log('I am dead in the paradise');
})

user.on('birthagain', () => {
    console.log('I am back on earth');
})

user.on('birthagain', () => {
    console.log('I am baby');
})

user.trigger('change')
user.trigger('birthagain')