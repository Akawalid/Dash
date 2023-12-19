
// const file = 'src/server/db/db.json';

// let get_all = () => {

// };

// let post = (user) => {

// };
// export default {
//   get_all,
//   post,
// };
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String, 
    last_name:String,
    email: String,
    telephone: String,
    company_name: String,
    level: Number
});

module.exports = mongoose.model('participants', orderSchema);