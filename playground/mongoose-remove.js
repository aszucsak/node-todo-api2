const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) - does not return the removed docs but the number of docs removed.
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove() - returns doc
// Todo.findByIdAndRemove() - returns doc

Todo.findByIdAndRemove('5c189f6282abd770381b23ce').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove({_id: '5c189f6282abd770381b23ce'}).then((todo) => {
//     console.log(todo);
// });