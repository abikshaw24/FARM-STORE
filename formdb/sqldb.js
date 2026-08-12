const mysql=require('mysql2')

const myData=new mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"LAvs@2025",
    port:3306,
    database:"farmdb"
})

myData.connect((err)=>{
    if (err){
        console.log("MYSQL  is not connected ")
    }else{
        console.log("MYSQL database is connected ")
    }
})

module.exports=myData;