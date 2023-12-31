import nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "darkword907@gmail.com",
    pass: "bkettqkscaxgcqeb"
  }
});
transporter.verify(function(error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const email = formData.get("name");
      const subject = formData.get("email");
      const number = formData.get("number");
      const body = formData.get("message");
      let html = `Name: ${email}
Email: ${subject}
Message: ${body}`;
      console.log(html);
      const message = {
        from: email,
        to: "barryopeyemi@gmail.com",
        bcc: "hello@webjeda.com",
        subject,
        text: `Name: ${email}
Number: ${number}
Message: ${body}`,
        html
      };
      const sendEmail = async (message2) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(message2, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };
      await sendEmail(message);
      return {
        success: "Email is sent"
      };
    } catch (error) {
      console.error(error);
    }
  }
};
export {
  actions
};
