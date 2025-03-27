require('dotenv').config();

const express = require("express");
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
});

const sendMail = async ({name, mail, message}) => {
  return await transport.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: "messagePortfolio",
    html: `
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${mail}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  })
}

console.log("MAIL_USER " + process.env.MAIL_USER);

app.post('/send-mail', (req, res) => {
  const {name, email, message} = req.body;

  

  // transport.sendMail((error, info) => {
  //   if (error) {
  //     return res.status(500).send(error.toString());
  //   }
      res.status(200).send('mail envoyé' + sendMail(name, email, message))
  // })
})

app.listen(3000, () => console.log('Serveur backend lancé sur http://localhost:3000'));