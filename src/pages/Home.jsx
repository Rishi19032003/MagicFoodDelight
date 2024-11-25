import { assets } from '../assets/assets';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import '../index.css'; // Adjusted path for CSS file

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: true, // Animation happens only once when scrolling into view
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: false
  };

  return (
    <div className="home-container">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-image">
            <img src={assets.shrimp} alt="Slide 1" />
          </div>
          <div className="slider-image">
            <img src={assets.Tilapia} alt="Slide 2" />
          </div>
          <div className="slider-image">
            <img src={assets.Cuttlefish} alt="Slide 3" />
          </div>
          <div className="slider-image">
            <img src={assets.FlyingSquid} alt="Slide 4" />
          </div>
          <div className="slider-image">
            <img src={assets.SeaTigerShrimp} alt="Slide 5" />
          </div>
        </Slider>
      </div>

      <div className="content">
        <h1 data-aos="fade-right">Welcome to Magic Delight Foods</h1>
        <p data-aos="fade-left">Your premier destination for seafood trading, where passion meets expertise. With over 25 years of experience in the seafood industry, our dedicated team is committed to bridging the gap between buyers and sellers, ensuring a seamless and reliable marketplace.</p>

        <p data-aos="fade-right">Founded on the principles of quality, sustainability, and transparency, Magic Delight Foods operates from key locations around the globe, including offices in India, the USA, Holland, and Africa. This international presence allows us to tap into diverse seafood markets and bring you the best products from trusted suppliers, no matter where you are located.</p>

      </div>
    </div>
  );
};

export default Home;
