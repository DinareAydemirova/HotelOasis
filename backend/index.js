const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require("./src/routes");
const AuthRouter = require('./src/routes/authRouter');
require("./src/config/db");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/", router);
app.use("/", AuthRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
