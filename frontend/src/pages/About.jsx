import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-hero" style={{backgroundImage: 'url("/coir_mats.jpg")'}}>
        <div className="container text-center page-hero-content">
          <h1>About Us & History</h1>
          <p>The legacy of Babu Coir</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid history-grid">
            <div className="history-content">
              <h4 className="subtitle">Our Story</h4>
              <h2>Rooted in Tradition, Growing with Innovation</h2>
              <p>Babu Coir began its journey several decades ago in the heart of Kerala, India, the traditional home of the coir industry. What started as a small family-owned enterprise has grown into one of the most respected names in the global coir export market.</p>
              <p>Over the years, we have mastered the art of extracting the finest fibers from coconut husks to create products that are not only durable and functional but also completely biodegradable and environmentally friendly.</p>
              
              <div className="stats-grid mt-4">
                <div className="stat-box">
                  <h3>30+</h3>
                  <p>Years of Legacy</p>
                </div>
                <div className="stat-box">
                  <h3>50+</h3>
                  <p>Countries Exported To</p>
                </div>
                <div className="stat-box">
                  <h3>100%</h3>
                  <p>Sustainable</p>
                </div>
              </div>
            </div>
            <div className="history-image">
              <img src="/coir_banner.jpg" alt="History of Babu Coir" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light text-center">
        <div className="container">
          <h2>Our Vision & Mission</h2>
          <div className="vision-mission grid">
            <div className="vm-box">
              <h3>Our Vision</h3>
              <p>To be the world's most trusted partner for sustainable, eco-friendly coir solutions, driving global transition towards natural products.</p>
            </div>
            <div className="vm-box">
              <h3>Our Mission</h3>
              <p>To manufacture and export the highest quality coir products while ensuring ethical labor practices, environmental sustainability, and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
