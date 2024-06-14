const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router= require("./src/routes")
const cors = require('cors')
require("./src/config/db")

app.use(cors())
app.use(bodyParser.json())
app.use("/", router )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})