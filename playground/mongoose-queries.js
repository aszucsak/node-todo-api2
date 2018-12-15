const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c122368fb1d560da0d3a7d511';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not Valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// findOne and findById are the same when findOne's argument is the ID
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('One Todo', todo);
// }).catch((e) => console.log(e));

User.findById('5c0bf9ed5473bb323c60c013').then((user) => {
    if(!user) {
        return console.log(JSON.stringify(user),undefined,2);
    }
    console.log("User: ", user);
}).catch((e) => console.log(e));