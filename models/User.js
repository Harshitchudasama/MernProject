const mongoose =  require("mongoose")
const { Schema } = mongoose;
 const UserSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phnumber:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
 });

 module.exports = mongoose.model('user',UserSchema)