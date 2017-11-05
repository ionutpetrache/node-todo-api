const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var todoid = '69ff049c2c0940713404f7cb11';
var userid = '59fe39657e2e55c925cf8cf4';

// if (!ObjectID.isValid()) {
//     console.log('ID not valid', todoid);
// }

// Todo.find({
//     _id: todoid
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: todoid
// }).then((todo) => {
//     console.log('One todo:', todo)
// });

// Todo.findById(todoid).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Find one:', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(userid).then((user) => {
    if (!user) {
        return console.log('User ID not found');
    }
    console.log('You looked for:', JSON.stringify(user));
}).catch((e) => {
    console.log(e);
});