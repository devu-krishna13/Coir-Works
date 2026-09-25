import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" style={{display: 'inline-block', marginBottom: '1rem'}}>
            <img src="/logo.png" alt="Babu Coir Logo" style={{ height: '50px', width: 'auto' }} />
          </Link>
          <p>Premium coir works and products for B2B buyers worldwide. Sustainable, durable, and crafted with excellence.</p>
          <div className="social-links flex gap-1">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.svgrepo.com/show/448224/facebook.svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.27.06-2.14.26-2.9.56-.78.31-1.44.73-2.1 1.39-.66.66-1.08 1.32-1.39 2.1-.3.76-.5 1.63-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.14.56 2.9.31.78.73 1.44 1.39 2.1.66.66 1.32 1.08 2.1 1.39.76.3 1.63.5 2.9.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.9-.56.78-.31 1.44-.73 2.1-1.39.66-.66 1.08-1.32 1.39-2.1.3-.76.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.9-.31-.78-.73-1.44-1.39-2.1-.66-.66-1.32-1.08-2.1-1.39-.76-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm5.23-9.52a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/></svg>
            </a>
            <a href="#" aria-label="X/Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.24 2.55h3.3l-7.22 8.26 8.5 11.23h-6.66l-5.21-6.82-5.96 6.82H1.7l7.73-8.84L1.31 2.55h6.82l4.7 6.22zM15.42 20.1h1.83L6.92 4.4H4.95z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li className="flex items-center gap-1">
              <MapPin size={18} />
              <span>123 Coir Industry Road, Kerala, India</span>
            </li>
            <li className="flex items-center gap-1">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-1">
              <Mail size={18} />
              <a href="mailto:info@babucoir.com">info@babucoir.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Babu Coir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
