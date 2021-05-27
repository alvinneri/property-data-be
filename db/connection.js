const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://Alvin:Binbai13@testcluster1.74rc4.mongodb.net/propertyData?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`mongoDB connected : ${connection.connection.host}`);
  } catch (error) {
    console.error(error, "mongodb error");
  }
};

module.exports = connectDb;
