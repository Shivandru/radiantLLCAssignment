import React from "react";
import { CgChevronDown } from "react-icons/cg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="mainFooter">
      <div>
        <p>CATEGORIES</p>
        <ul>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div>
        <p>CONTACT</p>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div id="usa">
        <p>
          united states <CgChevronDown id="footerImg" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
