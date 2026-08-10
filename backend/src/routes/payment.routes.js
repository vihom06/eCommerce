import { Router } from "express";

import {
    createPayment,
    verifyPayment
} from "../controllers/payment.controller.js";

import {
    verifyJWT,
    authorizeRoles
} from "../middlewares/auth.middleware.js";


const router = Router();


router.post(
    "/create_payment",
    verifyJWT,
    authorizeRoles("Buyer"),
    createPayment
);


router.post(
    "/verify_payment",
    verifyJWT,
    authorizeRoles("Buyer"),
    verifyPayment
);


export default router;