const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  description: String,
  publishedDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: Array,
  published: Boolean,
  cover: String,
  extraImages: Array,
});

module.exports = mongoose.model("News", newsSchema);
