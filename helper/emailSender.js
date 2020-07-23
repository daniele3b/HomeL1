const { transporter } = require("../startup/emailSender");

async function emailSender(pdf, data) {
  let info = transporter.sendMail({
    from: '"HomeLess Project" <progetto-diana@libero.it>',
    to: "mariocavaiola@libero.it",
    subject: data.name+", that's your document!",
    html: "Hi "+data-name+", that's your document!",
    
        attachments: [
            {
             path: pdf
            }
         ]
  });
}

exports.emailSender = emailSender;
