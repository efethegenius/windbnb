import React from "react";
import Logo from "./files/logo.svg";
import { FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="discover" smooth={true}>
        <img src={Logo} alt="footer logo" className="footer-logo" />
      </Link>
      <div className="socials">
        <a
          href="https://www.instagram.com/efethegenius/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/efe-samuel-7997a779/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social" />
        </a>

        <a href="https://www.twitter.com/efethegenius">
          <FaTwitterSquare className="social" />
        </a>
      </div>
      <div id="creator">
        <p id="creator">Created By Efe Samuel</p>
        <p>samuelefe.37@gmail.com</p>
      </div>
    </div>
  );
};
