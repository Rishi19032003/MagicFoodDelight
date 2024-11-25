import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../index.css'; // Adjusted path for CSS file

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="about-container">
      <div className="content">
        <h1 data-aos="fade-right">Our Expertise</h1>
        <p data-aos="fade-left">
          Our team brings decades of knowledge in sourcing, processing, and distributing seafood. We understand the complexities of the industry and are adept at navigating its challenges. From fresh catches to frozen delicacies, we offer a wide range of seafood products tailored to meet the needs of our diverse clientele, including restaurants, retailers, and individual seafood lovers.
        </p>

        <h2 data-aos="fade-right">Commitment to Sustainability</h2>
        <p data-aos="fade-left">
          At Magic Delight Foods, we believe in responsible sourcing and sustainable practices. We work closely with our suppliers to ensure that our seafood is harvested in an environmentally friendly manner, supporting the health of our oceans and the communities that depend on them. Our commitment to sustainability not only benefits the planet but also ensures that our customers receive the highest quality products.
        </p>

        <h2 data-aos="fade-right">Global Network</h2>
        <p data-aos="fade-left">
          With offices strategically located in India, the USA, Holland, and Africa, we have a unique advantage in understanding regional markets and consumer preferences. This global network allows us to provide unparalleled service, quick response times, and access to a diverse range of seafood products that reflect the rich culinary traditions of each region.
        </p>

        <h2 data-aos="fade-right">Our Mission</h2>
        <p data-aos="fade-left">
          Our mission at Magic Delight Foods is to simplify the seafood trading process, making it easy for you to access the finest products while enjoying exceptional service. We prioritize customer satisfaction and strive to build lasting relationships within the seafood community. Whether you're a small business or a large enterprise, we are here to support you every step of the way.
        </p>

        <p data-aos="fade-up" className="closing">
          Thank you for choosing Magic Delight Foods. We look forward to serving you and sharing our passion for seafood with you!
        </p>
      </div>
    </div>
  );
};

export default About;
