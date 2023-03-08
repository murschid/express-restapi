/* eslint-disable consistent-return */
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(401).json({ message: "Something went wrong", error });
    }
};

exports.updateUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        req.body.password = await bcrypt.hash(req.body.password, 11);
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json({ message: "User has been updated", updatedUser });
    } catch (error) {
        res.status(401).json({ message: "Something went wrong", error });
    }
};

exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: "No user found" });
        }
        const deletedUser = await User.findByIdAndDelete(userId);
        res.status(200).json({ message: "User has been deleted", deletedUser });
    } catch (error) {
        res.status(401).json({ message: "Something went wrong", error });
    }
};
