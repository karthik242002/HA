import React from 'react';
import Copyrights from './Copyrights';

const Footer = () => {
  const Links = [
    {
      link1: "About Us",
      link2: "Terms of Services",
      link3: "Social Initiatives",
      link4: "Privacy Policy",
      link5: "LinkedIn",
    },
    {

    },
  ];

  return (
    <div className='about-footer'>
      <section className='footer-section'>
        <div className='footer-container'>
          {Links.map((item, index) => (
            <ul key={index} className='footer-links'>
              <h6>{item.tittle}</h6>
              <li> <a href="./about">{item.link1}</a></li>
              <li> <a href="./TermsofServices">{item.link2}</a></li>
              <li> <a href="./social-initiatives">{item.link3}</a></li>
              <li> <a href="#">{item.link4}</a></li>
              <li> <a href="https://www.linkedin.com/company/yugaastech/">{item.link5}</a></li>
            </ul>
          ))}


          <div className="map-and-contents">
            {/* Embed Google Maps as a map preview */}
            <div className="map-preview">
              <iframe
                title="Map Preview"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124333.65310658963!2d79.9015071808839!3d13.135465684541018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289b72cf8bb8f%3A0xd5fed379d9b04ecc!2sJaya%20Engineering%20College!5e0!3m2!1sen!2sin!4v1695884570970!5m2!1sen!2sin"
                width="400"
                height="300"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          {/* Contents */}
          <div className="footer-contents">
            {/* Place your contents here */}
          </div>
        </div>

        <Copyrights />
      </section>
    </div>
  );
};

export default Footer;
