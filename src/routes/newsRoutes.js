const express = require("express");
const {
  getNewsList,
  createNews,
  getFile,
} = require("../controllers/newsController");
const router = express.Router();

router.route("/createNews").post(createNews);
router.route("/uploads").get(getFile);
router.route("/getNewsList").get(getNewsList);
module.exports = router;
