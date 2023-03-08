/* eslint-disable consistent-return */
const Post = require("../models/postModel");

exports.addPost = async (req, res) => {
    const { title, body, category, username, photo } = req.body;
    try {
        const post = await Post.create({ title, body, category, username, photo });
        res.status(200).json({ message: "Post saved successfully", post });
    } catch (error) {
        res.status(401).json({ message: "Something went wrong", error });
    }
};

exports.getAllPosts = async (req, res) => {
    const { username, category } = req.query;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (category) {
            posts = await Post.find({ category: { $in: [category] } });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(401).json({ message: "Something Went Wrong", error });
    }
};

exports.getPostsByLimit = async (req, res) => {
    let { page, limit } = req.query;
    try {
        if (!page) page = 1;
        if (!limit) limit = 10;
        const skip = (page - 1) * limit;
        const posts = await Post.find().skip(skip).limit(limit);
        res.status(200).json({ page, limit, posts });
    } catch (error) {
        res.status(401).json({ message: "Something Went Wrong", error });
    }
};

exports.getPost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(400).json({ message: "No Post Found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(401).json({ message: "Something Went Wrong", error });
    }
};

exports.updatePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(400).json({ message: "No Post Found" });
        }
        const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true });
        res.status(200).json({ message: "Post Updated Successfully", updatedPost });
    } catch (error) {
        res.status(401).json({ message: "Something Went Wrong", error });
    }
};

exports.deletePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(400).json({ message: "No Post Found" });
        }
        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: "Post Deleted Successfully" });
    } catch (error) {
        res.status(401).json({ message: "Something Went Wrong", error });
    }
};
