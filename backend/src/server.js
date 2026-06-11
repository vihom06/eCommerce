import dotenv from "dotenv";
import app from "./app.js";


// load environment variables
dotenv.config();


const PORT = process.env.PORT || 4000;


// starting server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});