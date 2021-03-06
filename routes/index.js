const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const proxyRoutes = require("./proxy");

router.use("/api", apiRoutes);
router.use("/proxy", proxyRoutes);

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
