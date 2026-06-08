const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  nome: {
    type: String,
    required: true,
    maxlength: 100,
  },
  pais: {
    type: String,
    required: true,
    maxlength: 100,
  },
  fundacao: {
    type: Number,
  },
});

module.exports = mongoose.model("Company", CompanySchema);