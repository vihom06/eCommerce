import express from "express";

import {
    addToCart,
    getMyCart,
    updateCartQuantity,
    removeFromCart,
    clearCart
} from "../controllers/cart.controller.js";

import {
    verifyJWT,
    authorizeRoles
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/add_to_cart").post(
    verifyJWT,
    authorizeRoles("Buyer"),
    addToCart
);

router.route("/my_cart").get(
    verifyJWT,
    authorizeRoles("Buyer"),
    getMyCart
);

router.route("/update_cart").put(
    verifyJWT,
    authorizeRoles("Buyer"),
    updateCartQuantity
);

router.route("/remove_from_cart/:productId").delete(
    verifyJWT,
    authorizeRoles("Buyer"),
    removeFromCart
);

router.route("/clear_cart").delete(
    verifyJWT,
    authorizeRoles("Buyer"),
    clearCart
);

export default router;