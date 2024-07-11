import nodemailer from 'nodemailer';

export const sendEmail = async ({ from, to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADD,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };

  //mpfo qtof asfx knyy

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: "Something went wrong!" };
  }
};
