const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  titulo: {
    type: String,
    required: true,
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