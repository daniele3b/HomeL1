const { CreatePdf } = require("./helper/markdownEdit");

CreatePdf({
  name: "Daniele",
  surname: "Bufalieri",
  birthday_day: "02",
  birthday_month: "12",
  birthday_year: "1998",
  day: "22",
  month: "7",
  year: "2020",
  street: "Via Attilio Palozza 47",
  city: "Guidonia Montecelio",
  cap: "00012",
  to: "Avv Ivan Giacomoni",
  lang: "ita",
});

//Inviare email di prova (mancano le credenziali)
//const {emailSender} = require('./helper/emailSender')
//emailSender()
