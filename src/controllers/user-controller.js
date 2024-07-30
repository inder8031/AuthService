const UserService = require('../services/user-service');

const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: "Registration successful",
            err: {}
        });
    } catch (error) {
        console.log("Registration failed");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Registration failed",
            err: error
        });
    }
} 

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        return res.status(200).json({
            data: user,
            success: true,
            message: "Successfully fetched a user",
            err: {}
        });
    } catch (error) {
        console.log("Failed to fetch a user");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch a user",
            err: error
        });
    }
} 

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json({
            data: users,
            success: true,
            message: "Successfully fetched all users",
            err: {}
        });
    } catch (error) {
        console.log("Failed to fetch all users");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch all users",
            err: error
        });
    }
} 

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: "Successfully updated a user",
            err: {}
        });
    } catch (error) {
        console.log("Failed to update a user");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to update a user",
            err: error
        });
    }
} 

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        return res.status(200).json({
            data: user,
            success: true,
            message: "Successfully deleted a user",
            err: {}
        });
    } catch (error) {
        console.log("Failed to delete a user");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete a user",
            err: error
        });
    }
} 

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
}