const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            default: "admin"
        },
        category: {
            type: Array,
            required: false
        },
        photo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
