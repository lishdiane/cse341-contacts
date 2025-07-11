const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const routes = require("./routes");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())
  .use("/", routes);

app.listen(port, () => {
  console.log(`Web Service listening on Port ${port}`);
});
