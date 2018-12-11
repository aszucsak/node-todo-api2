var mongoose = require('mongoose');

// options to handle deprecation warnings 
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', options);

module.exports = { mongoose };