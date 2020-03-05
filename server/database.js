const mongoose = require("mongoose");

const URI = "mongodb://localhost/scn-test";

mongoose.connect(URI)
.then(db => console.log("DB is connect"))
.catch(err => console.error(err));

// MongoClient.connect("mongodb://localhost:27017/scn-test", { useNewUrlParser: true })

module.exports = mongoose;
