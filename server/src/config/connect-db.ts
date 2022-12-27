import mongoose, { ConnectOptions } from "mongoose";

export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions).then(() => {
            console.log("Mongoose connected successfully!");
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}