//const mysql=require('mysql2')

//const myData=new mysql.createConnection({
//   host:"localhost",
//  user:"root",
//password:"LAvs@2025",
//port:3306,
//database:"farmdb"
//})

//myData.connect((err)=>{
//    if (err){
//        console.log("MYSQL  is not connected ")
//    }else{
//        console.log("MYSQL database is connected ")
//    }
//})

//module.exports=myData;
const mysql = require("mysql2");
require("dotenv").config();

const myData = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE
});

myData.connect((err) => {
  if (err) {
    console.log("MYSQL is not connected");
    console.log(err);
  } else {
    console.log("MYSQL database is connected");
  }
});

module.exports = myData;