const mongoose = require("mongoose");
const AuthorsSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
        },
        Email:{
            type:String,
        },
        Password:{
            type:String,
        },
        Phone_number:{
            type:Number,
        },
        Adress:{
            type:String,
        },
        No_of_Articles:{
            type:Number,
        },
    },
)
const createdModal = mongoose.model("authors", AuthorsSchema);
module.exports = createdModal;
