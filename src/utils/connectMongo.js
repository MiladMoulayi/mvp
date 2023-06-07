import mongoose from "mongoose";

const connectMongo = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(() => console.error("Could not connect to DB"));

export default connectMongo;
