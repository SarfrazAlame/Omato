import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://sarfrazProject:jsDfXEYPXHBdc8FY@cluster0.37r8rhm.mongodb.net/Tomato").then(() => console.log("db connected"))
}
