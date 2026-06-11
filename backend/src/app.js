import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


// creating express application
const app = express();


// middlewares
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));


// testing route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "eCommerce API is running"
    });
});


// export app
export default app;