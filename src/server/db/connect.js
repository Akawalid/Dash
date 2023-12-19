
const mongoose = require('mongoose');

const connect = () =>
    mongoose.connect('mongodb+srv://OualidCHABANE:' + process.env.MONGODB_PWD + '@devfest.wtz9hep.mongodb.net/?retryWrites=true&w=majority');


module.exports = connect