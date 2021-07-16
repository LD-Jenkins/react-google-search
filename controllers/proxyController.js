const axios = require('axios');
require('dotenv').config();

module.exports = {
  searchBooks: async function(req, res) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.title}&key=${process.env.API_KEY}`);
    return res.json(response.data);
  },
};
