const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        profile: {
            type: String,
            default: "avatar.png"
        }
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
