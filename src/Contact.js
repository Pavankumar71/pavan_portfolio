import React from "react";
import "./Contact.css";
export default function Contacts() {
  return (
    <div>
      <div className="contacts" id="Contact">
        <h1>Contact Me</h1>
        <div className="center-div">

        <div className="phone">
          <i className="fa fa-phone"> </i>

          <a tel="+91 7799820552" target="_blank" rel="noreferrer">
            +91 7799820552
          </a>
        </div>
        <div className="phone">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto: chandudaane@gmail.com">
              chandudaane@gmail.com
            </a>
          </div>
          </div>

        <a href="https://github.com/chandu806" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/daane-chandu-48b8311b5/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
       
       
        <a href="mailto: chandudaane@gmail.com">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
}
