const router = require("express").Router();
const { signup, signIn, signOut, refresh } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/signIn", signIn);
router.post("/refresh", refresh);
router.delete("/signOut", signOut);

module.exports = router;
