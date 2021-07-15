import axios from "axios";
// require('dotenv').config();

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  findBooks: function(title) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyB0jSxGXW7e4wxa1beUHu8v4_N4OIWh1ic`);
  }
};
