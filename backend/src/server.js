import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";


// load environment variables
dotenv.config();


const PORT = process.env.PORT || 4000;


// connect database then start server
connectDB()
.then(()=>{


    app.listen(PORT, ()=>{

        console.log(
            `Server is running on port ${PORT}`
        );

    });


})
.catch((error)=>{


    console.log(
        "MongoDB connection failed",
        error
    );


});