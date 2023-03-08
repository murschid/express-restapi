// upload route
exports.upload = (req, res) => {
    const uFile = req.file;
    if (!uFile) {
        res.send("Something Went Wrong");
    }
    console.log(uFile);
    res.send("File Uploaded Successfully");
};

// upload route for server.js file
// app.post("/api/upload", upload.single("image"), (req, res) => {
//     const uFile = req.file;
//     if (!uFile) {
//         res.send("Something went wrong");
//     }
//     // console.log(uFile);
//     res.send("File uploaded successfully");
// });
