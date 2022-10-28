const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(`Welcome to Home`);
});
app.get("/bookmark", (req, res) => {
  res.send(`Welcome to Bookmark`);
});
app.listen(8000, () => {
  console.log(`server listening on port 8000`);
});
