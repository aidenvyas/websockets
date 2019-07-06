let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "im dead" }).status(200);
});

module.exports = router;
