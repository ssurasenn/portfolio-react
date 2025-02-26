import React from "react";
import "./Contact.css";
import { CONTACT } from "../../constants";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "20fe405a-2260-4ae1-837a-e14badf6c3d4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
        }
      };
  return (
    <div id="contact"className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Contact</h2>
          <div className="contact-details">
            <div className="contact-detail">
              <TfiLocationPin className="icon-location" />
              <p>{CONTACT.address}</p>
            </div>
            <div className="contact-detail">
              <MdOutlinePhoneIphone className="icon"/>
              <p>{CONTACT.phoneNo}</p>
            </div>
            <div className="contact-detail">
              <MdEmail className="icon"/>
              <p>{CONTACT.email}</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
