import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
        <div className="gpt3__footer-heading">
          <h1 className='gradient__text'> Do you want to step into the future before others? </h1>
        </div>
        <div className="gpt3__footer-btn">
          <p> Request Early Access </p>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt='logo'/>
            <p> Pilgatan 21, 112 23 SWE Stockholm,
              <br/> All Rights Reserved. </p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4> Links </h4>
            <p>GitHub</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4> Company </h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4> Get in touch </h4>
            <p>Pilgatan 21 112 23 SWE Stockholm</p>
            {/* <p>+46723423550</p> */}
            <p>info@gpt3.com</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
          <p>© 2024 GPT-3. All rights reserved. </p>
        </div>
    </div>
  )
}

export default Footer