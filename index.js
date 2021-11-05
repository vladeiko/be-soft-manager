require("dotenv").config();

const http = require("http");
const { urlencoded, json } = require("body-parser");
const express = require("express");
const cors = require("cors");
const { initRouter } = require("./config/routes");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 4000;

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
initRouter(app);

server.listen(port, () => console.log(`Monitor Events: Port - ${port}`));
