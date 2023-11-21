const mongoose = require('mongoose');
// const MongoURI = 'mongodb+srv://JenilAdmin:Jenil0410@cluster0.sgu5wmy.mongodb.net/GourmetGo?retryWrites=true&w=majority'
const MongoURI = 'mongodb+srv://harshitchudasama373:Harshit373@cluster0.souj0fo.mongodb.net/GourmetGo?retryWrites=true&w=majority'

const mongoDB = async () => {
    await mongoose.connect(MongoURI,{ useNewUrlParser: true},async(err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("connected");
            const fetcheddata = await mongoose.connection.db.collection("food_items");
            fetcheddata.find({}).toArray( function( err,data){
                if(err) console.log(err);
                else console.log();
            })


    }
    });
}
module.exports = mongoDB 