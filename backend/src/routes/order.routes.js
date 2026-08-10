import { Router } from "express";

import {
placeOrder
} from "../controllers/order.controller.js";

import {
verifyJWT,
authorizeRoles
} from "../middlewares/auth.middleware.js";

const router = Router();

// ===================================
// PLACE ORDER
// ===================================

router.post(
"/place_order",
verifyJWT,
authorizeRoles("Buyer"),
placeOrder
);

export default router;
