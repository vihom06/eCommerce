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

router.route("/create_product").post(
    verifyJWT,
    authorizeRoles("Seller"),
    createProduct
);

router.route("/update_product/:productId").put(
    verifyJWT,
    authorizeRoles("Seller"),
    updateProduct
);

router.route("/delete_product/:productId").delete(
    verifyJWT,
    authorizeRoles("Seller"),
    deleteProduct
);

router.route("/my_products").get(
    verifyJWT,
    authorizeRoles("Seller"),
    getMyProducts
);

router.route("/my_product/:productId").get(
    verifyJWT,
    authorizeRoles("Seller"),
    getMyProduct
);

router.route("/all_products").get(
    getAllProducts
);

router.route("/get_product/:productId").get(
    getProduct
);

export default router;