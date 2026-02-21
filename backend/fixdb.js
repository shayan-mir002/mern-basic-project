const mongoose = require("mongoose");
require("dotenv").config();

const fixDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected. Dropping index...");
        const db = mongoose.connection.db;

        const indexes = await db.collection("students").indexes();

        const hasRollNumberIndex = indexes.some(idx => idx.name === "rollNumber_1");
        if (hasRollNumberIndex) {
            await db.collection("students").dropIndex("rollNumber_1");
            console.log("Successfully dropped 'rollNumber_1' index.");
        } else {
            console.log("Index 'rollNumber_1' not found, it might have already been dropped.");
        }

    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        process.exit(0);
    }
};

fixDb();
