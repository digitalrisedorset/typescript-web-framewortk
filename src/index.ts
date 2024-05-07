import {User} from './models/User';

const user = new User({ name: 'Herve', age:45 })

user.events.on('change', () => {
    console.log('test')
})

user.persister.fetch(1)

user.attributes.set({name: 'newname', age: 56})
user.persister.save(user.getData)

console.log(user.attributes.get('name'))