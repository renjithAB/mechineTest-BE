const NewsModel = require("../models/News");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

exports.getNewsList = async () => {
  return await NewsModel.find();
};

async function getFileUpload(fileName, fileBuffer) {
  fs.writeFile(`uploads/${fileName}`, fileBuffer, (err) => {
    if (err) {
      console.error(err);
      console.log("Error uploading file", err);
    } else {
      return fileName;
    }
  });
}

exports.createNews = async (req, res) => {
  const files = req.files;
  const payload = req.body;
  let cover = "";
  let extras = [];

  if (files) {
    for (const file of files) {
      fileName = uuidv4() + file.originalname;
      if (file.fieldname === "cover") {
        await getFileUpload(fileName, file.buffer);
        payload.cover =
          req.protocol +
          "://" +
          req.get("host") +
          "/api/uploads?file=" +
          fileName;
      } else {
        await getFileUpload(fileName, file.buffer);
        extras.push(
          req.protocol +
            "://" +
            req.get("host") +
            "/api/uploads?file=" +
            fileName
        );
      }
    }
    payload.extraImages = extras;
  }

  const rec = await NewsModel.create(payload);

  return rec;
};

exports.getFile = async (req, res) => {
  const fileName = req.query.file;
  const file = "";
  fs.readFile(`uploads/${fileName}`, function (err, data) {
    res.send(data);
  });
};

