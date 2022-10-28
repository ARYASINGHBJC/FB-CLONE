const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { parentPort } = require("worker_threads");
const app = express();
dotenv.config();
app.use(cors());

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
