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
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

app.post('/send-mail', (req, res) => {
  const {name, email, message} = req.body;
  const mailOption = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nouveau message de ${name}`,
    text: message
  };

  transport.sendMail(mailOption, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email envoyé : ' + info.response)
  })
})

app.listen(3000, () => console.log('Serveur backend lancé sur http://localhost:3000'));