import { Category } from "../models/category.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";


const createCategory = asyncHandler(async (req, res) => {

    const { name, parentCategory } = req.body;

    if (!name) {
        throw new ApiError(
            400,
            "Category name is required"
        );
    }

    const existingCategory = await Category.findOne({
        name
    });

    if (existingCategory) {
        throw new ApiError(
            400,
            "Category already exists"
        );
    }

    if (parentCategory) {

        const parent = await Category.findById(parentCategory);

        if (!parent) {
            throw new ApiError(
                404,
                "Parent category not found"
            );
        }

    }

    const category = await Category.create({
        name,
        parentCategory
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            category,
            "Category created successfully"
        )
    );

});


const updateCategory = asyncHandler(async (req, res) => {

    const { categoryId } = req.params;

    const allowedFields = [
        "name",
        "parentCategory"
    ];

    const updateData = {};

    allowedFields.forEach((field) => {

        if (req.body[field] !== undefined) {

            updateData[field] = req.body[field];

        }

    });

    if (updateData.parentCategory) {

        const parent = await Category.findById(updateData.parentCategory);

        if (!parent) {
            throw new ApiError(
                404,
                "Parent category not found"
            );
        }

    }

    const updatedCategory = await Category.findByIdAndUpdate(

        categoryId,

        {
            $set: updateData
        },

        {
            new: true,
            runValidators: true
        }

    );

    if (!updatedCategory) {
        throw new ApiError(
            404,
            "Category not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedCategory,
            "Category updated successfully"
        )
    );

});


const deleteCategory = asyncHandler(async (req, res) => {

    const { categoryId } = req.params;

    const childCategory = await Category.findOne({
        parentCategory: categoryId
    });

    if (childCategory) {
        throw new ApiError(
            400,
            "Delete child categories first"
        );
    }

    const deletedCategory = await Category.findByIdAndDelete(
        categoryId
    );

    if (!deletedCategory) {
        throw new ApiError(
            404,
            "Category not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            deletedCategory,
            "Category deleted successfully"
        )
    );

});


const getCategory = asyncHandler(async (req, res) => {

    const { categoryId } = req.params;

    const category = await Category.findById(categoryId)
        .populate("parentCategory");

    if (!category) {
        throw new ApiError(
            404,
            "Category not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            category,
            "Category fetched successfully"
        )
    );

});


const getAllCategories = asyncHandler(async (req, res) => {

    const totalCategories = await Category.countDocuments();

    const categories = await Category.find()
        .populate("parentCategory");

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalCategories,
                categories
            },
            "Categories fetched successfully"
        )
    );

});


export {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategories
};