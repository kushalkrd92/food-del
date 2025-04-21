import { assets } from '../../assets/assets';
import './Footer.css'

const Footer = () => {
  return <div className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Welcome to our Contact Us page! We’re here to help you with any questions, feedback, or concerns about your food delivery experience. Please reach out via email or call us. Your satisfaction is our priority, and we look forward to assisting you!</p>
        <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+1-324-452-6732</li>
          <li>contact@tomato.com</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="footer-copyright">
    Copyright 2025 © Tomato.com - All Right Reserved.
    </p>
  </div>
}

export default Footer;