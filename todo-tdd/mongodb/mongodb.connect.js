const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://nicocasr:39621798@bogobike.dj6mi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
  } catch (error) {
    console.error(error);
    console.error("Error connecting to mongodb");
  }
}

module.exports = { connect };

