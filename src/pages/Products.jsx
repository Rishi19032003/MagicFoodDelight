import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import shrimpImage from '../assets/shrimp.png';
import tilapiaImage from '../assets/tilapia.png';
import cuttlefishImage from '../assets/cuttlefish.png';
import '../index.css';

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of each animation in ms
      once: true,    // Ensures animation happens only once
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Fresh Shrimp",
      description: "High-quality shrimp caught sustainably from coastal waters.",
      image: shrimpImage,
    },
    {
      id: 2,
      name: "Tilapia",
      description: "Farm-raised tilapia with a mild flavor, perfect for grilling or baking.",
      image: tilapiaImage,
    },
    {
      id: 3,
      name: "Cuttlefish",
      description: "Tender and flavorful cuttlefish, ideal for a variety of seafood dishes.",
      image: cuttlefishImage,
    },
  ];

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div
          className="product-item"
          key={product.id}
          data-aos="fade-up"             // Animation from bottom to top
          data-aos-delay={index * 200}   // Delay for each item
        >
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
