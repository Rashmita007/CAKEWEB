import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const bg = require('../Assets/banner.jpg');
  return (
    <footer className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer-links">
        <ul>
          <li><a href="/"><b>Home</b></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><b>Instagram</b></a></li>
        </ul>
        <ul>
          <li><a href="https://maps.app.goo.gl/qvxrtZz9JrKHBypeA" target="_blank" rel="noopener noreferrer"><b>Location</b></a></li>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><b>Facebook</b></a></li>
          
        </ul>        
      </div>
      <div className="copyright">
        <b>&copy; Cake Delight, 2023-24</b>
      </div>
    </footer>
  );
};

export default Footer;