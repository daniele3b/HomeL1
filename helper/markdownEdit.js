fs = require("fs");
const config = require("config");

function markdownEditFile(data) {
  if (data.lang == "eng") {
    fs.writeFile(
      config.get("tmp_location") + data.name + data.surname + ".md",
      "--- \n name: " +
        data.name +
        "\n surname: " +
        data.surname +
        "\n birthday: " +
        data.birthday_month +
        "/" +
        data.birthday_day +
        "/" +
        data.birthday_year +
        "\n day: " +
        data.month +
        "/" +
        data.day +
        "/" +
        data.year +
        "\n street: " +
        data.street +
        "\n city: " +
        data.city +
        "\n cap: " +
        data.cap +
        "\n to: " +
        data.to +
        "\n...\n",
      function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      }
    );

    if (data.lang == "ita") {
      fs.writeFile(
        config.get("tmp_location") + data.name + data.surname + ".md",
        "--- \n name: " +
          data.name +
          "\n surname: " +
          data.surname +
          "\n birthday: " +
          data.birthday_day +
          "/" +
          data.birthday_month +
          "/" +
          data.birthday_year +
          "\n day: " +
          data.day +
          "/" +
          data.month +
          "/" +
          data.year +
          "\n street: " +
          data.street +
          "\n city: " +
          data.city +
          "\n cap: " +
          data.cap +
          "\n to: " +
          data.to +
          "\n...\n",
        function (err) {
          if (err) throw err;
          console.log("File is created successfully.");
        }
      );
    }

    //Creo il file md completo necessario
    var w = fs.createWriteStream(
      config.get("tmp_location") + data.name + data.surname + ".md",
      { flags: "a" }
    );

    var r = fs.createReadStream(
      config.get("template_location") +
        config.get("template_name") +
        data.lang +
        ".md"
    );

    w.on("close", function () {
      console.log("done writing");
    });

    r.pipe(w);
  }
}

exports.markdownEditFile = markdownEditFile;
