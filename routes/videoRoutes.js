const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
const videos = require("../data/video-details.json");

router.get("/", (req, res) => {
  res.json(videos);
});

router.get("/:videoId", (req, res) => {
  const video = videos.find((video) => video.id === req.params.videoId);

  if (!video) {
    res.status(404).send("Video not found");
  }

  res.send(video);
});

module.exports = router;
