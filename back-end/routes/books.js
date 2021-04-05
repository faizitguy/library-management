const express = require("express");
const Book = require("../models/books");
const mongoose = require("mongoose");
const router = express.Router();
const paginatedResults = require("../middleWares/pagination");
const searchResults = require("../middleWares/Search");
const booksData = require("../booksData");

const {
  getBooks,
  addBook,
  getBook,
} = require("../controller/books-controller");

router.get("/", paginatedResults(Book), getBooks);
router.get("/:id", getBook);
router.post("/", addBook);

module.exports = router;
