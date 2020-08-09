const bodyParser = require("body-parser");
const getStatusServer = require("../routes/getStatusServer")

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/", getStatusServer)
};