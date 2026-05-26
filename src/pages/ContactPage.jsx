import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <form action="">
        <input type="text" placeholder="Your name" /> <br />
        <input type="email" placeholder="Email address" /> <br />
        <input type="tel" placeholder="Phone number" /> <br />
        <input type="text" placeholder="Subject" /> <br />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>{" "}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactPage;
