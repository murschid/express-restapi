const mongoose = require("mongoose");

const database = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Database has been connected successfully");
    } catch (error) {
        console.log("Database Connection Failed");
    }
};

module.exports = database;
