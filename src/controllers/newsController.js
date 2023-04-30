const newsService = require("../services/newsService");

exports.getNewsList = async (req, res) => {
  try {
    const news = await newsService.getNewsList();
    res.json({ data: news, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNews = async (req, res) => {
  setTimeout(() => {
    console.log("Hello, World!");
  }, 1000);
  try {
    const news = await newsService.createNews(req, res);
    res.json({ data: news, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFile = async (req, res) => {
  try {
    const file = await newsService.getFile(req, res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
