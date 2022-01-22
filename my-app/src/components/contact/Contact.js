import React from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {
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
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Have any questions?</b> Feel free to reach out with any inquires
            that you may have.
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name"></input>
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input type="text" placeholder="Email" name="user_email"></input>
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
