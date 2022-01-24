import React from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Badge from "../../img/DUbadge.png";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_78tkxee",
        "template_ssn85et",
        formRef.current,
        "user_DM76I3fAl7Udl9N8JXw0x"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">My Contact Information</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              303.927.9636
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              james.broski.5@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Denver, Colorado
            </div>
            <div className="c-info-item">
              <img src={Badge} alt="" className="c-icon" />
              Resume -
              <a
                class="text-success"
                href="https://docs.google.com/document/d/1U_RxEn66K3NuNRRhaSica_rdD0ceUp_HXhTeFTQWYwo/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Click Here!
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Have any questions?</b> Feel free to reach out with any inquires
            that you may have!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            ></input>
            <input
              style={{
                backgroundColor: darkMode && "#333",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input
              style={{
                backgroundColor: darkMode && "#333",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            ></input>
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            ></textarea>
            <button>Submit</button>
            {done && "  Email sent - I will reach out to you soon!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
