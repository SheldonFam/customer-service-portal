const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const connectMongoDb = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected:${connectMongoDb.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
