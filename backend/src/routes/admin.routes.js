import express from "express";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";

import { getAllSellersForAdmin, getAllUsersForAdmin,  getSellerDetailsForAdmin } from "../controllers/admin.controller.js";


const router = express.Router();

router.route("/get_sellers_for_admin").get(
    verifyJWT,
    authorizeRoles("Admin"),
    getAllSellersForAdmin
);

router.route("/get_users_for_admin").get(
    verifyJWT,
    authorizeRoles("Admin"),
    getAllUsersForAdmin
);

router.route("/get_seller_details_for_admin/:sellerId").get(
    verifyJWT,
    authorizeRoles("Admin"),
    getSellerDetailsForAdmin
);

export default router;