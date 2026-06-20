import express from "express";


import { updateProfile } from "../controllers/profile.controller.js";


import { verifyJWT } from "../middlewares/auth.middleware.js";



const router = express.Router();  



router
  .route("/update_profile")
  .put(
    verifyJWT,
    updateProfile
  );



export default router;