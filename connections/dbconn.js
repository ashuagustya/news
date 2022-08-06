const mongoose = require("mongoose");

const databaseconnection = async()=>{
    try {
     await mongoose.connect("mongodb://localhost:27017/myfirstdatabase");  
    console.log("databse is connected");
    } catch (error) {
        console.log(error)
        
    }
};

module.exports  = databaseconnection;
