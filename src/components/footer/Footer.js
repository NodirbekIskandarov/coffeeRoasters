import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_son">
        <div className="row justify-content-between align-items-center my-3 py-5">
          <div className="col-3 footer_logo_part">
            <img src="images/logo-light.png" alt="logo" />
          </div>
          <div className="col-4 footer_menu">
            <Link className="link" to="/">
              HOME
            </Link>
            <Link className="link" to="/about">
              ABOUT US
            </Link>
            <Link className="link" to="/create-plan">
              CREATE YOUR PLAN
            </Link>
          </div>
          <div className="col-2 footer_social">
            <a href="https://www.instagram.com/">
              <BsInstagram />
            </a>
            <a href="https://www.facebook.com/">
              <BsFacebook />
            </a>
            <a href="https://www.twitter.com/">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
