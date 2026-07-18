import express from "express";

import {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategories
} from "../controllers/category.controller.js";

import {
    verifyJWT,
    authorizeRoles
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/create_category").post(
    verifyJWT,
    authorizeRoles("Admin"),
    createCategory
);

router.route("/update_category/:categoryId").put(
    verifyJWT,
    authorizeRoles("Admin"),
    updateCategory
);

router.route("/delete_category/:categoryId").delete(
    verifyJWT,
    authorizeRoles("Admin"),
    deleteCategory
);

router.route("/get_category/:categoryId").get(
    getCategory
);

router.route("/get_all_categories").get(
    getAllCategories
);

export default router;