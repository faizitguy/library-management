const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    book: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    totalPages: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    coverPhoto: {
      type: String,
      required: false,
    },
    chapters: [
      {
        chapterName: {
          type: String,
        },
        chapterPages: {
          type: String,
        },
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Books", booksSchema);
