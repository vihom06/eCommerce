import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/database.js";


const PORT = process.env.PORT || 4000;


// Connect database then start server
connectDB()
.then(() => {

    app.listen(PORT, () => {

        console.log(
            `Server is running on port ${PORT}`
        );

    });

})
.catch((error) => {

    console.log(
        "MongoDB connection failed",
        error
    );

});