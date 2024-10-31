import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MainContainer } from "../Styles";

const Footer = () => {
  return (
    <footer className="footer">
      <MainContainer>
        <div className="footer-subContainer">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>P.O Box 21889, Windhoek</p>
            <p>
              <a href="tel:+264853833201">+264853833201</a>
            </p>
            <p>
              <a href="tel:+264852036652">+264852036652</a>
            </p>
            <p>
              <a href="mailto:Sharambearproperties@gmail.com">
                chelsea@sharambearprop.com
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h4>Sources</h4>
            <p>
              <Link to="/about" className="siteMenuLink">
                <a>About us</a>
              </Link>
            </p>
            <p>
              <Link to="/services" className="siteMenuLink">
                {" "}
                <a>Services</a>
              </Link>
            </p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <p>
              <Link to="/properties" className="siteMenuLink">
                <a>Properties</a>
              </Link>
            </p>
            <p>
              <Link to="/contact " className="siteMenuLink">
                <a>Contact us</a>
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-subContainer">
          <div className="footer-section copyright">
            <p>
              Copyright © 2024. All Rights Reserved. — Powered by{" "}
              <a href="http://mbuto-elearn.com/">MbutoSowa</a>
            </p>
          </div>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
