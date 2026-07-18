// package imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


// route imports
import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import addressRoute from "./routes/address.routes.js"
import sellerRoute from "./routes/seller.routes.js"
import adminRoute from "./routes/admin.routes.js"
import productRoute from "./routes/product.routes.js";
import categoryRoute from "./routes/category.routes.js";


// middleware imports
import errorHandler from "./middlewares/error.middleware.js";




// creating express application
const app = express();




// global middlewares
app.use(
    express.json()
);


app.use(
    express.urlencoded({
        extended:true
    })
);


app.use(
    cookieParser()
);


app.use(
    cors({
        origin:process.env.FRONTEND_URL,
        credentials:true
    })
);




// health check route
app.get("/", (req,res)=>{

    res
    .status(200)
    .json({

        success:true,

        message:"eCommerce API is running"

    });

});




// api routes
app.use( "/api/v1/auth", authRoutes );

app.use( "/api/v1/profile", profileRoutes );

app.use( "/api/v1/address", addressRoute );

app.use( "/api/v1/seller",  sellerRoute );

app.use( "/api/v1/admin",  adminRoute );

app.use("/api/v1/product", productRoute);

app.use("/api/v1/category", categoryRoute);




// error handling middleware
app.use(
    errorHandler
);




// export app
export default app;