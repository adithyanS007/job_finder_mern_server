const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  category: String,
  location: String,
  description: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("Job", jobSchema);
