const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema(
    {
        News_Headline:{
            type:String,
        },
        News_Discription:{
            type:String,
        },
        News_Location:{
            type:String,
        },
        News_Author:{
            type:String,
        },
    },
)
const createdModal = mongoose.model("news", NewsSchema);
module.exports = createdModal;
