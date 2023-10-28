import mongoose, { connection } from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: "worklog",
    });
    console.log("DB connected");
    // console.log(connection);
    // console.log(connection.name);
  } catch (error) {
    console.log("connection failed");
    console.log(error);
  }
};
