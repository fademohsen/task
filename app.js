const express = require('express');
const app = express();
require('dotenv').config({ path: './configs/config.env' })

app.use(express.json());
require("./routes/item.routes")(app);


module.exports = app
