const { receiveInfo } = require("./amqp/consumer.js");
const { GenerateTemplate } = require("./startup/templateLoader");
var cors = require("cors");
const express = require("express");
var app = express();
const config = require("config")

require("./startup/routes")(app);

app.use(cors());

const port = config.get("port");

app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});

GenerateTemplate();

receiveInfo();
