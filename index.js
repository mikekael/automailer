require('dotenv').config();

const mailer = require('nodemailer');

async function main() {

  console.info('creating mail transport');

  const transporter = mailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS,
    }
  });

  console.info('Transport created. Sending email...');

  const mail = await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: process.env.MAIL_SUBJECT,
    text: 'Hello from automailer',
  });

  console.info('Mail sent with message id: %s', mail.messageId);
}

main().catch(console.error);