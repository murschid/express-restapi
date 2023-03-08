const router = require("express").Router();
const { home } = require("../controllers/homeController");

router.get("/", home);

module.exports = router;

// home route for server.js file
// app.get("/", (req, res) => {
//     res.send("WELCOME TO EXPRESS REST API")
// });
