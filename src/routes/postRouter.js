const router = require("express").Router();
const { addPost, getAllPosts, getPost, updatePost, deletePost, getPostsByLimit } = require("../controllers/postController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/addPost", authMiddleware, addPost);
router.get("/getPosts", getAllPosts);
router.get("/getPostsByLimit", getPostsByLimit);
router.get("/getPost/:postId", getPost);
router.put("/updatePost/:postId", authMiddleware, updatePost);
router.delete("/deletePost/:postId", authMiddleware, deletePost);

module.exports = router;
