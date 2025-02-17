import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import slider0 from '../../assets/slider/slider0.jpg';
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';

const Slider = () => {
  const slides = [
    {
      image: slider0,
      alt: 'Shoes Fashion',
      title: 'Shoes Fashion',
      subtitle1: 'Come and Get it!',
      subtitle2: 'Brand New Shoes',
      buttonText: 'Shop Now',
      link: '/Category',
    },
    {
      image: slider1,
      alt: 'Quick Fashion',
      title: 'Quick Fashion',
      subtitle1: 'Fit Your Wardrobe',
      subtitle2: 'WITH LUXURY ITEMS',
      buttonText: 'Shop Now',
      link: '/Category',
    },
    {
      image: slider2,
      alt: 'Quick Offer',
      title: 'Quick Offer',
      subtitle1: 'Wooden Minimal Sofa',
      subtitle2: 'EXTRA 50% OFF',
      buttonText: 'Shop Now',
      link: '/Category',
    },
    {
      image: slider3,
      alt: 'Best Deals',
      title: 'Best Deals',
      subtitle1: 'Come and Get it!',
      subtitle2: 'PUSH THE LIMIT',
      buttonText: 'Shop Now',
      link: '/Category',
    },
  ];

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <div className="slider">
      <div className="container">
        <div className="wrapper">
          <div className="myslider swiper">
            <div className="swiper-wrapper">
              {slides.map((slide, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="item">
                    <div className="image object-cover">
                      <img src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
                    </div>
                    <div className="text-content flexcol">
                      <h4>{slide.title}</h4>
                      <h2>
                        <span>{slide.subtitle1}</span>
                        <br />
                        <span>{slide.subtitle2}</span>
                      </h2>
                      <a href={slide.link} className="primary-button">
                        {slide.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
