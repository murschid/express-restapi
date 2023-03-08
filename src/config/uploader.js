const multer = require("multer");
const path = require("path");

const FOLDER = "./uploads/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = `${file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-")}_${Date.now()}`;
        cb(null, fileName + fileExt);
    }
});

exports.uploader = multer({
    storage,
    limits: { fileSize: 10000000 }
});
