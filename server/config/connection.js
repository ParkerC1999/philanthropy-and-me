const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + "/./../.env"});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/philanthropy-and-me', {
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

module.exports = mongoose.connection