

const mongoose=require("mongoose");


const mydb=new mongoose.Schema({
    cname:{
        type:String ,
        required:true
    },
     cemail:{
        type:String ,
        required:true
    }, cphone:{
        type:String ,
        required:true
    }, caddress:{
        type:String ,
        required:true
    }, cmessage:{
        type:String ,
        required:true 
    }}
    ,{collection:"visitordetails"}
)

//                                 here always should be the collection name && the name we kept 
module.exports=mongoose.model("visitordetails",mydb);



