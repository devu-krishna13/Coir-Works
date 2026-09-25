import { useState } from 'react';
import './Products.css';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Mats', 'Geotextiles', 'Garden & Coco Peat', 'Rugs'];

const PRODUCTS = [
  { id: 1, name: 'PVC Tufted Coir Mats', category: 'Mats', img: '/coir_mats.jpg' },
  { id: 2, name: 'Woven Coir Mats', category: 'Mats', img: '/coir_mats.jpg' },
  { id: 3, name: 'Rubber Backed Coir Mats', category: 'Mats', img: '/coir_mats.jpg' },
  { id: 4, name: 'Coir Geotextiles 400 GSM', category: 'Geotextiles', img: '/coir_geotextiles.jpg' },
  { id: 5, name: 'Coir Geotextiles 700 GSM', category: 'Geotextiles', img: '/coir_geotextiles.jpg' },
  { id: 6, name: 'Coir Geotextiles 900 GSM', category: 'Geotextiles', img: '/coir_geotextiles.jpg' },
  { id: 7, name: 'Coco Peat 5kg Blocks', category: 'Garden & Coco Peat', img: '/coco_peat.jpg' },
  { id: 8, name: 'Grow Bags', category: 'Garden & Coco Peat', img: '/coco_peat.jpg' },
  { id: 9, name: 'Coir Pots', category: 'Garden & Coco Peat', img: '/coco_peat.jpg' },
  { id: 10, name: 'Coir Poles', category: 'Garden & Coco Peat', img: '/coco_peat.jpg' },
  { id: 11, name: 'Basket Liners', category: 'Garden & Coco Peat', img: '/coco_peat.jpg' },
  { id: 12, name: 'Coir Logs', category: 'Geotextiles', img: '/coir_geotextiles.jpg' },
  { id: 13, name: 'Boucle Coir Rugs', category: 'Rugs', img: '/coir_mats.jpg' },
  { id: 14, name: 'Panama Coir Rugs', category: 'Rugs', img: '/coir_mats.jpg' },
  { id: 15, name: 'Herringbone Coir Rugs', category: 'Rugs', img: '/coir_mats.jpg' },
  { id: 16, name: 'Printed Coir Mats', category: 'Mats', img: '/coir_mats.jpg' },
  { id: 17, name: 'Corridor Mats', category: 'Mats', img: '/coir_mats.jpg' },
  { id: 18, name: 'Hollow Rubber Mats', category: 'Mats', img: '/coir_mats.jpg' },
  { id: 19, name: 'Coco Chips', category: 'Garden & Coco Peat', img: '/coco_peat.jpg' },
  { id: 20, name: 'Coir Yarn', category: 'Geotextiles', img: '/coir_geotextiles.jpg' },
  { id: 21, name: 'Rubber Edge Coir Mats', category: 'Mats', img: '/coir_mats.jpg' },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="products-page">
      <div className="page-hero" style={{backgroundImage: 'url("/coco_peat.jpg")'}}>
        <div className="container text-center page-hero-content">
          <h1>Our Products</h1>
          <p>Premium coir solutions for every need</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="category-filters">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid products-grid animate-fade-in">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="product-card">
                <div className="product-img-wrapper">
                  <img src={prod.img} alt={prod.name} />
                </div>
                <div className="product-info">
                  <span className="category-label">{prod.category}</span>
                  <h3>{prod.name}</h3>
                  <button className="product-link btn-link">Inquire Now <ArrowRight size={16}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
