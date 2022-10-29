const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { parentPort } = require("worker_threads");
const app = express();
dotenv.config();
app.use(cors());

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log(`Error connecting to database ${err}`));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
