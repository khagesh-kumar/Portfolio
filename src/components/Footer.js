import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer__col">
          <img src={logo} alt="company logo" className="footer__logo" />
        </div>
        <div className="footer__col">
          <h3 className="footer__title">Contact Me</h3>
          <div className="footer__content">
            <FontAwesomeIcon icon={faPhone} /> +91 7032348501
          </div>
          <div className="footer__content">
            <FontAwesomeIcon icon={faEnvelope} /> Khageshkumar000000@gmail.com
          </div>
          <div className="footer__content">
            <a href="https://www.linkedin.com/in/b-khagesh-kumar/" className="footer__link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/khagesh-kumar" className="footer__link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/_khagesh._/" className="footer__link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer__col contact-form">
          <h3 className="footer__title">Send a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form__form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact-form__button">
              Send Message
            </button>
          </form>
        </div>
      </footer>
      <div className="copyright">
        All rights reserved. © 2024 Khagesh Kumar. Crafted with care and creativity.
      </div>
    </div>
  );
};

export default Footer;
