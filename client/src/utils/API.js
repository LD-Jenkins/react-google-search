import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },  
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBooks: async function(title) {
    return await axios.get(`/proxy/${title}`);
  }
};
