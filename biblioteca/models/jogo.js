const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JogoSchema = new Schema({
  titulo: { type: String, required: true, minLength: 3, maxLength: 100 },
  autor: { type: String, required: true, minLength: 3, maxLength: 100 },
  ano: { type: String, required: true, minLength: 3, maxLength: 100 }

 
});

// Virtual for Jogo's URL
JogoSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/Jogo/${this._id}`;
});

// Export model
module.exports = mongoose.model("Jogo", JogoSchema);