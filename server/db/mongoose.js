var mongoose = require('mongoose');

// options to handle deprecation warnings 
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, options);

module.exports = { mongoose };