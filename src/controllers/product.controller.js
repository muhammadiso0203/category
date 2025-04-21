import { Product, User } from "../models/index.js";

export const userController = {
    getAllProduct: async (req, res, next) => {
        try {
            const product = await Product.find()
            if (!Product) {
                return next(new Error("Product not found", 404))
            }
            res.status(200).json({
                status: "success",
                message: "Products find successfully",
                error: null,
                data: {
                    product
                },
            })
        } catch (error) {
            next(error)
            console.log(error);
            
        }
    },
    getOneProduct: async (req, res, next)=> {
        try {
            const { id } = req.params
            const product = await Product.findById(id)
            if (!Product) {
                return next(new Error("Product not found"))                
            }
            res.status(200).json({
                status: "success",
                message: "Product find successfully",
                error: null,
                data: {
                    product
                },
            })
        } catch (error) {
            next(error)
            console.log(error);
            
        }
    },
    create: async (req, res, next) => {
        try {
            const body = req.body;
            const product = new Product(body);
            await product.save();

            res.json({
                status: "success",
                message: "New product created",
                error: null,
                data: {
                    product,
                },
            });
        } catch (error) {
            next(error);
            
        }
    },
    update: async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const product = Product.findById(id)
            if (product) {
                await Product.updateOne({ _id: id }, body)
                return res.status(200).json({
                    status: "success",
                    message: "Update product",
                    error: null,
                    data: null
                })
            }
            return next(new Error("Product not found", 404))
            
        } catch (error) {
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const product = Product.findById(id)
            if (product) {
                await Product.deleteOne({ _id: id})
                return res.status(200).json({
                    status: "success",
                    message: "Delete product",
                    error: null,
                    data: null
                })
            }
            return next(new Error("Product not found", 404))
            
        } catch (error) {
            next(error)
        }
    }
};