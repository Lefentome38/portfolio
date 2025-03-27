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
  try {
    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "messagePortfolio",
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${mail}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    console.log("Email envoyé");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email", error);
    throw error;
  }
}

app.post('/send-mail', async (req, res) => {
  const {name, mail, message} = req.body;

  try {
    await sendMail({name, mail: mail, message})
    res.status(200).send("mail envoyé avec succès")
  } catch (error) {
    res.status(500).send('Erreur lors de l\'envoi du mail');
  }
})

app.listen(3000, () => console.log('Serveur backend lancé sur http://localhost:3000'));