import express from 'express';
import * as path from 'path';
import nodemailerRoutes from './routes/nodemailerRoutes';
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(nodemailerRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// app.post('/sendEmail', (req, res) => {
//   const messageBody: string = `
//   <p>Someone reached out to you via your portfolio!</p>
//   <h2>Contact Information</h2>
//   <ul>
//     <li>Name: ${req.body.name}</li>
//     <li>Email: ${req.body.email}</li>
//     <li>Company: ${req.body.company}</li>
//     <li>Phone: ${req.body.phone}</li>
//   </ul>
//   <p>Message: ${req.body.message}</p>
//   `;

//   const transporter = nodemailer.createTransport({
//     service: process.env.EMAILSERVICE,
//     auth: {
//       user: process.env.RECIPIENTEMAIL,
//       pass: process.env.PASSWORD,
//     },
//   });

//   transporter
//     .sendMail({
//       from: `Nodemailer Contact: ${req.body.name} <${process.env.RECIPIENTEMAIL}>`,
//       to: 'jrgronewald@gmail.com',
//       subject: 'Someone contacted you via Nodemailer from your Portfolio',
//       html: messageBody,
//     })
//     .then((response) => {
//       const firstName = req.body.name.split(' ')[0];
//       res.json({
//         error: false,
//         message: `Your message has been sent! Thanks for reaching out, ${firstName}-- I look forward to talking with you soon!`,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
