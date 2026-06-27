import express from "express";

import { getAllSellersForAdmin,  } from "../controllers/admin.controller.js";


const router = express.Router();

router.route("/get_sellers_for_admin").get(
    verifyJWT,
    authorizeRoles("Admin"),
    getAllSellersForAdmin
);

export default router;