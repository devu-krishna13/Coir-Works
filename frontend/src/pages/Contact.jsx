import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-hero" style={{backgroundImage: 'url("/coir_geotextiles.jpg")'}}>
        <div className="container text-center page-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch for business inquiries</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid contact-grid">
            <div className="contact-info-wrapper">
              <h2>Let's Discuss Your Requirements</h2>
              <p className="contact-desc">We are always looking for new opportunities to work with B2B partners worldwide. Drop us a message, and our team will get back to you shortly.</p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <div className="icon-wrapper"><MapPin /></div>
                  <div>
                    <h4>Our Location</h4>
                    <p>123 Coir Industry Road, Kerala, India</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="icon-wrapper"><Phone /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="icon-wrapper"><Mail /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:info@babucoir.com">info@babucoir.com</a></p>
                  </div>
                </div>
              </div>

              <div className="whatsapp-box mt-4">
                <h4>Reach us directly on WhatsApp</h4>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp flex items-center justify-center gap-1" style={{whiteSpace: 'nowrap'}}>
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form action="mailto:info@babucoir.com" method="POST" encType="text/plain" className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" name="company" required placeholder="Your Company Ltd." />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Requirements *</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Tell us about the products you are looking for..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
