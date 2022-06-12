const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

function readVideos() {
  const videosData = fs.readFileSync("./data/video-details.json");
  const parsedData = JSON.parse(videosData);
  return parsedData;
}

router.post("/", (req, res) => {
  const newVideo = {
    id: uniqid(),
    title: req.body.title,
    description: req.body.description,
  };
  if (!req.body.title) {
    res.status(400).send("Title is required");
  } else if (!req.body.description) {
    res.status(400).send("Description is required");
  }
  const videos = readVideos();

  videos.push(newVideo);

  fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));

  res.json(newVideo);
});

module.exports = router;
