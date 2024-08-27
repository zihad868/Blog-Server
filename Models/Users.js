const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;