const mongoose=require('mongoose');
require('dotenv').config();
//  const mongoURL=process.env.MONGODB_URL_LOCAL;

const mongoURL=process.env.MONGODB_URL_LOCAL;

mongoose.connect(mongoURL)
    .then(()=>{
        console.log("Connected to MongDB server");
    })
    .catch((err)=>{
        console.log("MongoDb connection error:",err);
    })

const db=mongoose.connection;

db.on('disconnected',()=>{
    console.log("Connection to MongDB server lost");
})
module.exports=db;