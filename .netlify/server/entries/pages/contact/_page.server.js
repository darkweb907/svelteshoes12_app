import { f as fail } from "../../../chunks/index.js";
import { b as private_env } from "../../../chunks/shared-server.js";
import nodemailer from "nodemailer";
function createEmailTransporter() {
  const user = private_env.SMTP_USER;
  const pass = private_env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS must be configured to send contact emails.");
  }
  const port = Number(private_env.SMTP_PORT || 587);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT must be a valid port number.");
  }
  return nodemailer.createTransport({
    host: private_env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass }
  });
}
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("number");
    const body = formData.get("message");
    if (typeof name !== "string" || typeof email !== "string" || typeof number !== "string" || typeof body !== "string" || !name.trim() || !email.trim() || !body.trim()) {
      return fail(400, { error: "Please complete all contact form fields." });
    }
    try {
      const transporter = createEmailTransporter();
      await transporter.sendMail({
        from: private_env.SMTP_FROM || private_env.SMTP_USER,
        to: "barryopeyemi@gmail.com",
        bcc: "hello@webjeda.com",
        replyTo: email,
        subject: `Contact form: ${email}`,
        text: `Name: ${name}
Email: ${email}
Number: ${number}
Message: ${body}`
      });
      return { success: "Email is sent" };
    } catch (error) {
      console.error("Contact email delivery failed:", error);
      return fail(500, { error: "Unable to send your message. Please try again later." });
    }
  }
};
export {
  actions
};
