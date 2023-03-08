const router = require("express").Router();
const { uploader } = require("../config/uploader");
const { upload } = require("../controllers/utilController");

router.post("/upload", uploader.single("image"), upload);

module.exports = router;
