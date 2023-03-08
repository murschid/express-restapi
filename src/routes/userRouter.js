const router = require("express").Router();
const { getAllUsers, updateUser, deleteUser } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
    res.send("What can i do for you?");
});

router.get("/getUsers", authMiddleware, getAllUsers);
router.put("/updateUser/:userId", authMiddleware, updateUser);
router.delete("/deleteUser/:userId", authMiddleware, deleteUser);

module.exports = router;
