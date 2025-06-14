import mongoose from "mongoose";



async function connectDB()
{
    try {
        const connect =  await mongoose.connect('mongodb://localhost:27017/');
        console.log("Database connect successfully");
        return connect;
    } catch (error) {
        console.log("Something error is generate while connecting db");
    }
}

export { connectDB }