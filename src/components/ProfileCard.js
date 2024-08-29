import React from "react";
import './ProfileCard.css';

const ProfileCard = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/KhageshKumarCV.pdf';
    link.download = 'KhageshKumarCV.pdf';
    link.click();
  };

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          src={require('../images/me.jpg')}
          alt="Profile"
        />
      </div>
      <div className="profile-info">
        <div className="my_profession">
          <h2>Bhadrachalam Khagesh Kumar</h2>
          <p>FrontEnd Developer</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/b-khagesh-kumar/" title="LinkedIn" aria-label="LinkedIn">
            <img src={require('../images/linkedin-icon.png')} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/khagesh-kumar" title="GitHub" aria-label="GitHub">
            <img src={require('../images/github-icon.png')} alt="GitHub Icon" />
          </a>
          <a href="https://www.instagram.com/_khagesh._/" title="Instagram" aria-label="Instagram">
            <img src={require('../images/instagram-icon.png')} alt="Instagram Icon" />
          </a>
        </div>
        <div className="contact-info-container">
          <div className="contact-info-item">
            <img src={require('../images/phone-icon.png')} alt="Phone Icon" />
            <p><strong>Phone:</strong> +91 7032348501</p>
          </div>
          <div className="contact-info-item">
            <img src={require('../images/email-icon.png')} alt="Email Icon" />
            <p><strong>Email:</strong> khageshkumar000000@Gmail.Com</p>
          </div>
          <div className="contact-info-item">
            <img src={require('../images/location-icon.png')} alt="Location Icon" />
            <p><strong>Location:</strong> Hyderabad, Telangana</p>
          </div>
          <div className="contact-info-item">
            <img src={require('../images/birthday-icon.png')} alt="Birthday Icon" />
            <p><strong>Birthday:</strong> Jun 15, 2000</p>
          </div>
        </div>
        <button className="download-cv" onClick={handleDownloadCV}>
          📄 Download CV
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
