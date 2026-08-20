const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async (enquiry) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFY_EMAIL,
    subject: `New Contact Enquiry — ${enquiry.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6B1D2A;">New Contact Enquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0;">${enquiry.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${enquiry.email}</td></tr>
          ${enquiry.phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${enquiry.phone}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px 0;">${enquiry.message}</td></tr>
        </table>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #888; font-size: 12px;">Mount Carmel School Website — Contact Form</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

const sendAdmissionEmail = async (enquiry) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFY_EMAIL,
    subject: `New Admission Enquiry — ${enquiry.studentName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6B1D2A;">New Admission Enquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Parent Name</td><td style="padding: 8px 0;">${enquiry.parentName}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Student Name</td><td style="padding: 8px 0;">${enquiry.studentName}</td></tr>
          ${enquiry.className ? `<tr><td style="padding: 8px 0; font-weight: bold;">Class</td><td style="padding: 8px 0;">${enquiry.className}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${enquiry.phone}</td></tr>
          ${enquiry.email ? `<tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${enquiry.email}</td></tr>` : ""}
          ${enquiry.message ? `<tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px 0;">${enquiry.message}</td></tr>` : ""}
        </table>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #888; font-size: 12px;">Mount Carmel School Website — Admission Enquiry Form</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log("✓ Email transport verified successfully");
    return true;
  } catch (error) {
    console.error("✗ Email transport verification failed:", error.message);
    return false;
  }
};

module.exports = { sendContactEmail, sendAdmissionEmail, verifyTransporter };
