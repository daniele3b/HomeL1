const { transporter } = require("../startup/emailSender");

async function emailSender(pdf, data) {
  let info = transporter.sendMail({
    from: '"HomeLess Project" <progetto-diana@libero.it>',
    to: data.email,
    subject: "that's your document!",
    html: "Hi that's your document!",

    attachments: [
      {
        path: pdf,
      },
    ],
  });
}

exports.emailSender = emailSender;
