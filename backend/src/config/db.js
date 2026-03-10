import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connect Successfully ")
  } catch (error) {
    console.error("Database Connection failed ", error)
     process.exit(1);
  }
  
}

export default connectDB ;
