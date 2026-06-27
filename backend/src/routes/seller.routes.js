import express from "express";

import { createSeller, updateSeller, deleteSeller, getSeller, getAllSellersForAdmin, getAllSellersForBuyers } from "../controllers/seller.controller.js";
import { authorizeRoles, verifyJWT } from "../middlewares/auth.middleware.js";


const router = express.Router();


router.route("/create_seller").post(
    verifyJWT,
    createSeller
);

router.route("/update_seller").put(
    verifyJWT,
    updateSeller
);

router.route("/delete_seller").delete(
    verifyJWT,
    deleteSeller
);

router.route("/get_seller/:sellerId").get(
    getSeller
);

router.route("/get_sellers_for_buyers").get(
    getAllSellersForBuyers
);



export default router;
