const Category = require('../models/Category');
const mongoose = require('mongoose');
class CategoriesAPI {
    // [GET] /categories
    async findAll(req, res) {
        try {
            const categories = await Category
                .find({ status: 'active' })
                .sort({ 'displayOrder': 1 });
            res.json(categories);
        } catch (error) {
            console.log(error);
        }
    };

    // [GET] /categories/:slugCategory
    async findBySlug(req, res) {
        try {
            const { slugCategory } = req.params;
            const category = await Category
                .findOne({
                    slug: slugCategory,
                    status: 'active'
                });
            const parents = [];
            let parent = await Category
                .findOne({
                    _id: category.parentId,
                    status: 'active'
                })
                .select('title slug parentId');
            while (parent !== null) {
                parents.push(parent);
                const prevParent = await Category
                    .findOne({
                        _id: parent.parentId,
                        status: 'active'
                    })
                    .select('title slug parentId');
                parent = prevParent;
            };
            const children = await Category
                .find({
                    parentId: category._id,
                    status: 'active'
                })
                .sort({ 'displayOrder': 1 })
                .select('title slug');
            res.json({
                ...(category.toObject()),
                parents,
                children
            });
        } catch (error) {
            console.log(error);
        }
    };
    // [POST] /categories
    async insertCategory(req, res) {
        const banners = req.files['banners'].map( file => file.originalname );
        try {
            const category = new Category({
                ...req.body,
                image:req.files['image'][0].originalname,
                banners

            });
            await category.save();
            res.json({
                status: 'success',
                message: 'Create category successfully!'
            });
        } catch (error) {
            console.log(error);
        }
    };
     // [PUT] /categories/: categoryID
     async editCategoryById(req, res) {
        const banners = req.files['banners'].map( file => file.originalname );
        try { 
            const { categoryID } = req.params;
            const result = await Category.findByIdAndUpdate(categoryID, {
                ...req.body,
                image:req.files['image'][0].originalname,
                banners
            })
            res.json(result);
        } catch (error) {
            console.log(error);
        };
    };
    // [DELETE] /categories/:categoryID
    async deleteCategorybyID(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { categoryID } = req.params;
            const result = await Category
            .delete({ _id: categoryID }, deletor );
                res.json({
                    ...result,
                    categoryID
                });
        } catch (error) {
            console.log(error);
        };
    };

    // [DELETE] /categories/
    async deletedCategoryAll(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { categories } = req.body;
            const result = await Category
            .delete({ _id: { $in: categories }}, deletor );
                res.json({
                    ...result,
                    categories
                });
        } catch (error) {
            console.log(error);
        };
    };
};

module.exports = new CategoriesAPI;