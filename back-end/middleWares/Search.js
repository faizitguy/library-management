const mongoose = require("mongoose");
const Book = require("../models/books");

const searchResults = (model) => {
  return async (req, res, next) => {
    const searchedQuery = req.query.q;
    model
      .find({ book: { $regex: searchedQuery, $options: "$1" } })
      .then((data) => {
        res.send(data);
        next();
      });
  };
};

module.exports = searchResults;
