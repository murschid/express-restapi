/* eslint-disable consistent-return */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 11);
        const { name, username, email, password, profile } = req.body;
        const user = await User.create({ name, username, email, password, profile });
        res.status(201).json({ message: "Data inserted successfully", user });
    } catch (error) {
        // next(error);
        res.status(400).json({ message: "Something went wrong", error });
    }
};

exports.signIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Authentication Failed" });
        }
        const validate = await bcrypt.compare(password, user.password);
        if (!validate) {
            return res.status(400).json({ message: "Authentication Failed" });
        }
        const token = jwt.sign({ username, id: user.id }, process.env.PRIVATE_KEY, {
            expiresIn: "8h"
        });
        res.status(200).json({ message: "You've logged in successfully", token });
    } catch (error) {
        res.status(400).json({ message: "Something Went Wrong", error });
    }
};

exports.refresh = async (req, res) => {
    res.send("refresh");
};

exports.signOut = async (req, res) => {
    res.send("logout");
};
