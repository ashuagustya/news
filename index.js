const express = require("express");
const databaseconnection = require("./connections/dbconn");
const app = express();
const AUTHORS_MODEL = require("./model/authors");
const NEWS_MODEL = require("./model/news");
app.use(express.json());

app.get("/total_author/:Name", async(req, res)=>{
    try {
        const { Name, Email, Password, Phone_number, Adress, No_of_Articles } = req.body;
        const data = await AUTHORS_MODEL.findOne(
            {Name: req.params.Name},
            {
                Email:1,  Password: 1 
            } 
        );
        res.json({ success: true, data });
        
    } catch (error) {
        console.log(error); res.status(400).json({success: false, error: error.message});   
    }
});

app.get("/News", async(req, res)=>{
    try {
        const { News_Headline, News_Discription, News_Location, News_Author } = req.body;
        const data = await NEWS_MODEL({
            News_Headline, 
            News_Discription, 
            News_Location, 
            News_Author,
        
        });
        await data.save();
        res.json({ success: true, data });
        
    } catch (error) {
        console.log(error); res.status(400).json({success: false, error: error.message});   
    }
});

databaseconnection();
let port = 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));