import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../Assets/images/footer.png';

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footerImg})` }}
      className="footer p-10 mt-20 bg-cover bg-no-repeat bg-center ">
      <div>
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover">
          Branding
        </Link>
        <Link to="/" className="link link-hover">
          Design
        </Link>
        <Link to="/" className="link link-hover">
          Marketing
        </Link>
        <Link to="/" className="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          Contact
        </Link>
        <Link to="/" className="link link-hover">
          Jobs
        </Link>
        <Link to="/" className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
