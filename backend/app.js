const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')





//Error Middleware
const errorMiddleware = require("./middleware/errors");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.json())

const productRouter = require("./routes/productsRoute");
app.use(cors())

app.use("/api/v1/",productRouter)

app.use(errorMiddleware);

module.exports = app;
