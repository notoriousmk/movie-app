const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userid:Number,
    email:String, 
    first_name: String, 
    last_name: String, 
    username:String,
    contact:Number, 
    password:String,
    role:{
        type: String,
        enum:["user","admin"]
    }, 
    isLoggedIn: boolean, 
    uuid:String, 
    accesstoken:String,
    coupens:[
       {
          id:Number,discountValue: Number 
       }
       
    ],
    "bookingRequests":[
       {
          reference_number:Number,
          coupon_code:Number,show_id: Number,tickets:[Number]
       }
    ]

}) 

const USER = mongoose.model ('users,userSchema');

module.exports = USER