const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const database = require("./src/config/database");
const authRouter = require("./src/routes/authRouter");
const userRouter = require("./src/routes/userRouter");
const postRouter = require("./src/routes/postRouter");
const utilRouter = require("./src/routes/utilRouter");
const homeRouter = require("./src/routes/homeRouter");
const { notFoundError, defaultError } = require("./src/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use("/public", express.static(path.resolve(__dirname, "public")));
app.set("view engine", "ejs");
dotenv.config();

// server & database connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
    database();
});

// all common routes
app.use("/", homeRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/util", utilRouter);

// error handling routes
app.use(notFoundError);
app.use(defaultError);
