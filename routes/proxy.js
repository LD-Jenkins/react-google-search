const router = require("express").Router();
const proxyController = require("../controllers/proxyController");

router
  .route("/:title")
  .get(proxyController.searchBooks);

module.exports = router;
