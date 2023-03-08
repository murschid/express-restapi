/* eslint-disable consistent-return */
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Access Denied" });
        }
        const iToken = token.split(" ")[1];
        const decoded = jwt.verify(iToken, process.env.PRIVATE_KEY);
        const { id } = decoded;
        const user = await User.findById(id);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};
