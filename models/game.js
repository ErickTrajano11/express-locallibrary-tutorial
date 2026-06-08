const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
    maxlength: 100,
  },
  anoLancamento: {
    type: Number,
    required: true,
  },
  empresa: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
});

module.exports = mongoose.model("Game", GameSchema);