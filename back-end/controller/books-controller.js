const Books = require("../models/books");
const { validationResult } = require("express-validator");

const getBooks = (req, res) => {
  console.log(req.url);
  // Books.find()
  //   .then((books) => res.json(books))
  //   .catch((err) => res.status(400).json("Error: " + err));

  res.json(res.pagination);
};

const getBook = (req, res) => {
  Books.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
  // res.json(res.pagination);
};

const addBook = (req, res) => {
  const {
    book,
    author,
    category,
    year,
    chapters,
    totalPages,
    coverPhoto,
  } = req.body;

  const newBook = new Books({
    book,
    author,
    category,
    year,
    chapters,
    totalPages,
    coverPhoto,
  });

  newBook
    .save()
    .then(() => res.json("Book Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getBooks, addBook, getBook };
