import "dotenv/config";
import mongoose from "mongoose";

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to mongoDB')
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;