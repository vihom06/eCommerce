import express from "express";

import {
    createProduct,
    updateProduct,
    deleteProduct,
    getMyProducts,
    getMyProduct,
    getAllProducts,
    getProduct
} from "../controllers/product.controller.js";

import {
    verifyJWT,
    authorizeRoles
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(
    verifyJWT,
    authorizeRoles("Seller"),
    createProduct
);

router.route("/:productId").put(
    verifyJWT,
    authorizeRoles("Seller"),
    updateProduct
);

router.route("/:productId").delete(
    verifyJWT,
    authorizeRoles("Seller"),
    deleteProduct
);

router.route("/my-products").get(
    verifyJWT,
    authorizeRoles("Seller"),
    getMyProducts
);

router.route("/my-products/:productId").get(
    verifyJWT,
    authorizeRoles("Seller"),
    getMyProduct
);

router.route("/").get(
    getAllProducts
);

router.route("/:productId").get(
    getProduct
);

export default router;