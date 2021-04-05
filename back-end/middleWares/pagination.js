const mongoose = require("mongoose");
const booksData = require("../booksData");
// const Book = require("../config/db");
const Book = require("../models/books");

// const db = mongoose.connection;

// db.once("open", async () => {
//   if ((await Book.countDocuments().exec()) > 0) {
//     return;
//   }
//   Book.insertMany(booksData)
//     .then(() => res.json("Books added Successfully"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      results.current = await model.find().limit(limit).skip(startIndex).exec();
      res.pagination = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

module.exports = paginatedResults;
