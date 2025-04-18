import { User } from "../models/index.js";

export const userController = {
    getAllUser: async (req, res, next) => {
        try {
            const users = await User.find()
            if (!users) {
                return next(new Error("Users not found", 404))
            }
            res.status(200).json({
                status: "success",
                message: "Users find successfully",
                error: null,
                data: {
                    users
                },
            })
        } catch (error) {
            next(error)
            console.log(error);
            
        }
    },
    getOneUser: async (req, res, next)=> {
        try {
            const { id } = req.params
            const user = await User.findById(id)
            if (!user) {
                return next(new Error("User not found"))                
            }
            res.status(200).json({
                status: "success",
                message: "User find successfully",
                error: null,
                data: {
                    user
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
            const user = new User(body);
            await user.save();

            res.json({
                status: "success",
                message: "New user created",
                error: null,
                data: {
                    user,
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
            const user = User.findById(id)
            if (user) {
                await User.updateOne({ _id: id }, body)
                return res.status(200).json({
                    status: "success",
                    message: "Update user",
                    error: null,
                    data: null
                })
            }
            return next(new Error("User not found", 404))
            
        } catch (error) {
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const user = User.findById(id)
            if (user) {
                await User.deleteOne({ _id: id})
                return res.status(200).json({
                    status: "success",
                    message: "Delete user",
                    error: null,
                    data: null
                })
            }
            return next(new Error("User not found", 404))
            
        } catch (error) {
            next(error)
        }
    }
};