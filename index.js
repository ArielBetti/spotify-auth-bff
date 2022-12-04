const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json()).use(cookieParser());
require("./routes/authorization")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
