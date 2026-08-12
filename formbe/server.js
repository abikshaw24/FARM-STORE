//const mydataBase = require("../formdb/db");
//const mongoose = require("mongoose");

//const express = require("express");
//const cors = require("cors");

//const app = express();
//const PORT = 4000;

//app.use(cors());
//app.use(express.json());

//app.get("/", (req, res) => {
//  res.send("Connected");
//});

/*mongoose.connect("mongodb://127.0.0.1:27017/farm")

.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});*/

//app.post("/visitors", async (req, res) => {
//   try {

//       const { cname, cemail, cphone, caddress, cmessage } = req.body;
//
//      if (!cname || !cemail || !cphone || !caddress || !cmessage) {
//        return res.status(400).json({
//          message: "All fields are required"
//    });
//  }
//    const myData = new mydataBase({
//           cname,
//           cemail,
//           cphone,
//           caddress,
//           cmessage
//        });

//       await myData.save();

//      return res.status(200).json({
//          message: "Data Saved Successfully"
//      });

//    } catch (err) {
//        console.log(err);
//
//      return res.status(500).json({
//          message: "Backend Error"
//        });
//  }
// });

// app.listen(PORT, (err) => {
// if(err){
//        console.log("backend cum server error")
//  }else{
//  console.log(`Server running on port ${PORT}`);
//   }});


const express=require('express');
const cors=require('cors');
const mysql2=require('mysql2');
const PORT=4000;
const mydb=require('../formdb/sqldb');


const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    return  res.status(200).json({message :"server is running on port"});
    res.end()
})

app.post("/visitors",async(req,res)=>{
    try{
const {
    cname,
    cemail,
    cphone,
    caddress,
    cmessage     }=req.body;

    const fdata={cname,cemail,cphone,caddress,cmessage};
    console.log(fdata);

    if(!cname || !cemail || !cphone || !caddress ||  !cmessage ){
        console.log("data is not filled in Front End");
        return res.status(400).json({error:"DETAILS NOT FILLED IN FRONT END 404 CLIENT ERROR"})
    }
    else{

        const myDbQuery=`INSERT INTO visitordetails  (cname,cemail,cphone,caddress,cmessage) VALUES(?,?,?,?,?)`;
        mydb.query(myDbQuery,[cname,cemail,cphone,caddress,cmessage],(e,r)=>{
        
    if (e) {
    console.error("DATABASE ERROR:", e);
    return res.status(500).json({
        message: "Database error",
        error: e.message
    });
}else{
                return res.status(200).json({message:"data sent to db successfully"});
            
            }
        })
    }

    }
    catch(err) {
    console.log(err);
    return  res.status(500).json({error:"backend error 505 "})
   
    }
})

app.listen(PORT, (err) => {
if(err){
      console.log("backend cum server error")
 }else{
  console.log(`Server running on port ${PORT}`);
   }});