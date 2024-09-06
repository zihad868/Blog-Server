const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    authName: {
        type: String,
        required: true,
    },
    authEmail: {
        type: String,
        required: true, 
    },
    authImg: {
        type: String,
        required: true,  
    },
    title:{
        type: String,
        required: true, 
    },
    description:{
        type: String,
        required: true, 
    },
    category:{
        type: String,
        required: true, 
    },
    postImg:{
        type: String
    },
    postImg2:{
        type: String
    }
})


const PostModel = mongoose.model('posts', PostSchema);
module.exports = PostModel;