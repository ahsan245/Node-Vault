const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI
//'mongodb://127.0.0.1:27017/NoteVault'

const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo successfully");
    } catch (error) {
      console.log(error);
      process.exit();
    }
};

module.exports = connectToMongo;