const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.libero.it",
    port: 465,
    secure: true, 
    auth: {
      user: "progetto-diana@libero.it", 
      pass: "progettoDiana98"
    }
});

exports.transporter = transporter