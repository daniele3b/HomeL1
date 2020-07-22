fs = require("fs");
const config = require("config");

function markdownEditFile(data) {
  if (data.lang == "eng") {
    fs.writeFile(
      config.get("tmp_location") + data.name + data.surname + ".md",
      " --- \n name:" +
        data.name +
        "\n surname:" +
        data.surname +
        "\n birthday:" +
        data.birthday +
        "\n day:" +
        data.day +
        "\n street:" +
        data.street +
        "\n city:" +
        data.city +
        "\n cap:" +
        data.cap +
        "\n to:" +
        data.to +
        "\n ...",
      function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      }
    );
  }
}

exports.markdownEditFile = markdownEditFile;
