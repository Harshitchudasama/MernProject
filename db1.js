const mongoose = require('mongoose');
const MongoURI = 'mongodb+srv://harshitchudasama373:Harshit373@cluster0.souj0fo.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =() =>{
    mongoose.connect(MongoURI,()=>{
        console.log("connected");
    })
}

module.exports = mongoDB;