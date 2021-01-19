import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

export const nodemailerSend = async ({
  name,
  email,
  company,
  phone,
  message,
}) => {

  const messageBody: string = `
    <p>Someone reached out to you via your portfolio!</p>
    <h2>Contact Information</h2>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Company: ${company}</li>
      <li>Phone: ${phone}</li>
    </ul>
    <p>Message: ${message}</p>
    `;
    console.log(messageBody);
    console.log(process.env.EMAILSERVICE)
    console.log(process.env.SENDER)
    console.log(process.env.PASSWORD)
    console.log(process.env.RECIPIENT)
  try {
    const transporter = await nodemailer.createTransport({
      service: process.env.EMAILSERVICE,
      auth: {
        user: process.env.SENDER,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `Nodemailer Contact: ${name} <${process.env.SENDER}>`,
      to: process.env.RECIPIENT,
      subject: 'Someone contacted you via Nodemailer from your Portfolio',
      html: messageBody,
    });
    const firstName = name.split(' ')[0];

    return {
      message: `Your message has been sent! Thanks for reaching out, ${firstName}-- I look forward to talking with you soon!`,
    };
  } catch (error) {
    throw error;
  }
};
