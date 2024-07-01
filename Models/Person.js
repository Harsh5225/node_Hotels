const mongoose=require('mongoose')

//define the person scheme
const personSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum:['chef','waiter','Manager','owner'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }
})

// iss schema se model banate hai
// Create Person Model
const  Person=mongoose.model('Person',personSchema);
module.exports=Person;