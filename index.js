const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const chatRoutes = require("./Routes/chatRoutes");
const app = express();

app.use(cors());
app.use(bodyParser.json());

dotenv.config();

app.use("/", chatRoutes);

const port = process.env.PORT || 3000; // Use "PORT" instead of "port"

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
