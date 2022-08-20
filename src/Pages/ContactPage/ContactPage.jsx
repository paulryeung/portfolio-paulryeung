import React from "react";
//const nodemailer = require("nodemailer");

function ContactPage(props) {
  // async function mail() {
  //   let testAccount = await nodemailer.createTestAccount();

  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.ethereal.email",
  //     port: 587,
  //     secure: false, // true for 465, false for other ports
  //     auth: {
  //       user: testAccount.user, // generated ethereal user
  //       pass: testAccount.pass, // generated ethereal password
  //     },
  //   });

  //   console.log("Code here for mailing");
  // }

  return (
    <div className="ContactPage">
      <h1>Contact</h1>
    </div>
  );
}

export default ContactPage;
