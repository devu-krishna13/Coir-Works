import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play, ShieldCheck, Leaf, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { text: "Babu Coir has been our primary sourcing partner for over 5 years. Their coir mats are of exceptional quality and always meet global export standards.", author: "- John D., Sourcing Agent (USA)" },
    { text: "The sustainable practices and transparent supply chain of Babu Coir make them a top-tier vendor for our garden centers across Europe.", author: "- Sarah L., Buyer (Germany)" }
  ];
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in">
          <h1>Premium Coir Solutions for Global Buyers</h1>
          <p>Sustainable, durable, and crafted with excellence. Partner with Babu Coir for premium quality sourcing.</p>
          <div className="hero-buttons flex gap-2">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-light" style={{paddingBottom: '2rem'}}>
        <div className="container text-center">
          <h4 className="subtitle">Our Offerings</h4>
          <h2>Product Categories</h2>
          <div className="categories-grid mt-4">
            {[
              { name: 'Mats & Rugs', img: '/coir_mats.jpg' },
              { name: 'Coco Peat & Garden', img: '/coco_peat.jpg' },
              { name: 'Geotextiles', img: '/coir_geotextiles.jpg' },
              { name: 'Coir Yarn & Fiber', img: '/coir_banner.jpg' }
            ].map((cat, idx) => (
              <Link to="/products" key={idx} style={{display: 'flex', flexDirection: 'column', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
                <div style={{height: '200px', width: '100%', flexShrink: 0}}>
                  <img src={cat.img} alt={cat.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div style={{padding: '1.5rem', background: 'var(--primary)', color: '#fff', fontWeight: 'bold', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{cat.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section about-snippet">
        <div className="container grid about-grid">
          <div className="about-image">
            <img src="/coir_banner.jpg" alt="Coir manufacturing" />
          </div>
          <div className="about-content">
            <h4 className="subtitle">About Babu Coir</h4>
            <h2>Excellence in Every Thread</h2>
            <p>For over decades, Babu Coir has been at the forefront of manufacturing and exporting premium coir products. As a trusted B2B partner, we cater to buying agents worldwide with unparalleled quality and sustainable practices.</p>
            <ul className="features-list">
              <li><CheckCircle className="icon" /> 100% Natural & Sustainable</li>
              <li><CheckCircle className="icon" /> Global Export Standards</li>
              <li><CheckCircle className="icon" /> Custom Sourcing Solutions</li>
            </ul>
            <Link to="/about" className="link-with-icon">Learn More <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Featured Products Snippet */}
      <section className="section products-snippet bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Premium Products</h2>
            <p>Discover our range of high-quality coir products designed for durability and aesthetics.</p>
          </div>
          <div className="grid products-grid">
            {[
              { name: 'Coir Mats', img: '/coir_mats.jpg' },
              { name: 'Coir Pith / Cocopeat', img: '/coco_peat.jpg' },
              { name: 'Coir Geotextiles', img: '/coir_geotextiles.jpg' },
              { name: 'Rubber Edge Mats', img: '/coir_mats.jpg' }
            ].map((prod, index) => (
              <div key={index} className="product-card">
                <div className="product-img-wrapper">
                  <img src={prod.img} alt={prod.name} />
                </div>
                <div className="product-info">
                  <h3>{prod.name}</h3>
                  <Link to="/products" className="product-link">View Range <ArrowRight size={16}/></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary">View All 20+ Products</Link>
          </div>
        </div>
      </section>

      <section className="section video-section">
        <div className="container text-center">
          <h2>See Our Manufacturing Process</h2>
          <div className="video-wrapper mt-4">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/BHyGfzvWpwY?autoplay=0" title="Babu Coir Manufacturing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light text-center">
        <div className="container">
          <h4 className="subtitle">Client Reviews</h4>
          <h2>What Our B2B Partners Say</h2>
          <div className="testimonials-container mt-4">
            {testimonials.map((test, idx) => (
              <div key={idx} className="cert-box text-left" style={{padding: '3rem'}}>
                <p style={{fontStyle: 'italic', marginBottom: '1rem', fontSize: '1.2rem'}}>“{test.text}”</p>
                <h4>{test.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Global Export Section */}
      <section className="section" style={{backgroundColor: '#fff'}}>
        <div className="container grid about-grid">
          <div>
            <h4 className="subtitle">Seamless Logistics</h4>
            <h2>Global Export & Packaging</h2>
            <p style={{marginBottom: '1.5rem', color: 'var(--text-muted)'}}>We understand the strict requirements of B2B international trade. From custom labeling and palletization to fumigation and seamless documentation, Babu Coir delivers your orders directly to your port without hassle.</p>
            <ul className="features-list">
              <li>&bull; LCL and FCL Container Shipments</li>
              <li>&bull; Private Labeling & Barcoding</li>
              <li>&bull; Fumigation & Phytosanitary Certified</li>
            </ul>
          </div>
          <div>
            <img src="/coir_banner.jpg" alt="Global Export" style={{width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span>&bull; PREMIUM COIR PRODUCTS</span>
          <span>&bull; GLOBAL EXPORT QUALITY</span>
          <span>&bull; 100% NATURAL & SUSTAINABLE</span>
          <span>&bull; ETHICAL MANUFACTURING</span>
          <span>&bull; BULK B2B ORDERS</span>
          <span>&bull; CUSTOM PACKAGING</span>
          {/* duplicate for seamless loop */}
          <span>&bull; PREMIUM COIR PRODUCTS</span>
          <span>&bull; GLOBAL EXPORT QUALITY</span>
          <span>&bull; 100% NATURAL & SUSTAINABLE</span>
          <span>&bull; ETHICAL MANUFACTURING</span>
          <span>&bull; BULK B2B ORDERS</span>
          <span>&bull; CUSTOM PACKAGING</span>
        </div>
      </div>

      {/* Certifications */}
      <section className="section certifications">
        <div className="container text-center">
          <h4 className="subtitle">Our Certifications</h4>
          <h2>Committed to Global Standards</h2>
          <div className="flex justify-center gap-4 cert-flex">
            {['star.png', 'iso.png', 'sedex.png', 'bsci.png', 'ctpat.png', 'rohs.png'].map((cert, index) => (
              <div key={index} className="cert-box image-cert-box">
                <img src={`/${cert}`} alt={`Certification ${index + 1}`} className="cert-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trust Badges Section */}
      <section className="section bg-white">
        <div className="container text-center">
          <h4 className="subtitle">Sustainable & Durable</h4>
          <h2>Our Core Values</h2>
          <div className="trust-badges-grid mt-4">
            <div className="trust-badge">
              <ShieldCheck size={40} style={{color: 'var(--primary)', margin: '0 auto'}} />
              <h3>100% Quality</h3>
              <p style={{fontSize: '0.9rem', color: '#555', marginTop: '0.5rem'}}>Export grade assurance</p>
            </div>
            <div className="trust-badge">
              <Leaf size={40} style={{color: 'var(--primary)', margin: '0 auto'}} />
              <h3>Eco Friendly</h3>
              <p style={{fontSize: '0.9rem', color: '#555', marginTop: '0.5rem'}}>Fully biodegradable</p>
            </div>
            <div className="trust-badge">
              <Award size={40} style={{color: 'var(--primary)', margin: '0 auto'}} />
              <h3>Certified</h3>
              <p style={{fontSize: '0.9rem', color: '#555', marginTop: '0.5rem'}}>Globally recognized</p>
            </div>
            <div className="trust-badge">
              <Globe size={40} style={{color: 'var(--primary)', margin: '0 auto'}} />
              <h3>Global Shipping</h3>
              <p style={{fontSize: '0.9rem', color: '#555', marginTop: '0.5rem'}}>Seamless logistics</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
