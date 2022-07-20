import React from "react";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaViber, FaWhatsappSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbMessage } from "react-icons/tb";
import { ImLocation } from "react-icons/im";

import "./getInTouch.css";
function GetInTouch() {
  return (
    <div className="getInTouch_container">
      {/* <div className="header">
        <h1>Get in Touch </h1>
        
      </div> */}
      <div className="contact-us">
        <h3 className="git_contactus">CONTACT US</h3>
        <hr className="contactUs_hr" />
        <div className="contact-us-grid">
          <div className="form">
            <p style={{fontSize:"1.5rem"}}>Fill up the form and our team will get back to you.</p>

            <input
              type="text"
              name="name"
              id=""
              className="name"
              placeholder="Name:"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              id=""
              className="email"
              placeholder="Email:"
              autoComplete="off"
            />
            {/* <input type="tel" name="country" id="" className='' placeholder="Country"/> */}
            <div className="tel">
              <select name="country" id="country">
                <option value="Nepal">Nepal +977</option>
                <option value="USA">USA +1</option>
                <option value="India">India +91</option>
                <option value="Germany">Germany +05</option>
              </select>
              <input
                type="number"
                name="phone"
                id=""
                className="phone"
                placeholder="Phone:"
                autoComplete="off"
              />
            </div>
            <textarea
              name=""
              id=""
              rows="10"
              placeholder="write something to us"
              className="txtarea"
            ></textarea>
            <button className="free-consultation">Send</button>
          </div>
          
          <div className="contact_us_right">
          <div className="information_header">
                <h1>How can we Help?</h1>
                <p>
                  Please Select below options related to your Inquiry. <span>If you
                  didn't found what you need, fill out our contact form. </span>
                </p>
              </div>
          <div className="info">
            <h1>Contact Information </h1>
            <hr className="Ci_hr" />
            <div className="information">
  
              <IconContext.Provider value={{ className: "connect-us-icons" }}>
                <div className="call-msg-lt">
                  <FiPhoneCall style={{ marginLeft: "-1rem" }} />
                  <span>+977 1234567890</span>
                </div>
                <div className="call-msg-lt">
                  <TbMessage style={{ marginLeft: "-.8rem" }} />
                  <span>info@neutroline.com</span>
                </div>
                <div className="call-msg-lt">
                  <ImLocation style={{ marginLeft: "-.4rem" }} />
                  <span>
                    Shitalnagar,Devdaha-7{" "}
                    <span className="information-location">
                      Rupandehi,Nepal
                    </span>
                  </span>
                </div>
                <hr className="Ci_hr"/>
              </IconContext.Provider>
            </div>
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div className="social-links">
                <a href="/#">
                  {" "}
                  <BsFacebook style={{ color: "blue" }} />
                </a>
                <a href="/#">
                  <FaViber style={{ color: "#59267c" }} />
                </a>

                <a href="/#">
                  {" "}
                  <FaWhatsappSquare style={{ color: "	#25d366" }} />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
