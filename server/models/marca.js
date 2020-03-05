const mongoose = require("mongoose");
const { Schema } = mongoose;

const MarcasSchema = new Schema({

    name: {type: String, required: true},
    imagen: {type: String},
    categoria: {type: String, required: true}

});

module.exports = mongoose.model("Marca", MarcasSchema);