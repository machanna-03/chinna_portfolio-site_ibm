import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const footerLinks = {
    fontSize: "24px",
    gap: "20px",
  };
  return (
    <footer style={footerLinks}>
      <h4><a href="tel:+918688492100" style={{color:'white',textDecoration:'none'}}><b>Contact:</b> 8688492100</a></h4>

      <div className="footerLinks" style={footerLinks}>
        <a href="github.com/machanna-03" target="_blank">
          <FaGithub />
        </a>
        <a href="linkedin.com/in/gorantla-machanna-0173422b0" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:machanna037@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
      <h4>Bangalore, Karnataka</h4>
    </footer>
  );
};

export default Footer;
