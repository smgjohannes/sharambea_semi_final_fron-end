// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-subContainer'>
        <div className='footer-section'>
          <h4>Contact</h4>
          <p>P.O Box 21889, Windhoek</p>
          <p>
            <a href='tel:+264853833201'>+264853833201</a>
          </p>
          <p>
            <a href='tel:+264852036652'>+264852036652</a>
          </p>
          <p>
            <a href='mailto:Sharambearproperties@gmail.com'>
              Sharambearproperties@gmail.com
            </a>
          </p>
        </div>
        <div className='footer-section'>
          <h4>Sources</h4>
          <p>
            <a href='/about'>About us</a>
          </p>
          <p>
            <a href='/services'>Services</a>
          </p>
        </div>
        <div className='footer-section'>
          <h4>Links</h4>
          <p>
            <a href='/about'>About us</a>
          </p>
          <p>
            <a href='/contact'>Contact us</a>
          </p>
        </div>
      </div>

      <div className='footer-subContainer'>
        <div className='footer-section copyright'>
          <p>
            Copyright © 2024. All Rights Reserved. — Powered by{' '}
            <a href='https://example.com'>MbutoSowa</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
