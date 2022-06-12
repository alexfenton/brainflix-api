const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 8080;
const videoRoutes = require("./routes/videoRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const uniqid = require("uniqid");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/public-images", express.static("./files"));

app.use((req, res, next) => {
  console.log("Logging a request from middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.use("/videos", videoRoutes);

app.use("/upload", uploadRoutes);

app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
