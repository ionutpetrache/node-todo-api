var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var secondTodo = new Todo({
//     text: 'Learning NodeJS',
//     completed: false,
//     completedAt: Date.now()
// });

// secondTodo.save().then((doc) => {
//     console.log('Save 2nd todo:', doc);
// }, (err) => {
//     console.log('Unable to save 2nd todo', err);
// });


var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
    }
});

var newUser = new User({
    email: 'gigi.boschetaru@gmail.com '
});

newUser.save().then((doc) => {
    console.log('Saving the new user:', doc);
}, (err) => {
    console.log('Error saving the new user', err);
})