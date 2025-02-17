import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swiper from 'swiper';

import banner1 from '../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import procat1 from '../../assets/banner/procat1.jpg';
import procat2 from '../../assets/banner/procat2.jpg';
import procat3 from '../../assets/banner/procat3.jpg';
import asus from '../../assets/brands/asus.png';
import dng from '../../assets/brands/dng.png';
import hurley from '../../assets/brands/hurley.png';
import oppo from '../../assets/brands/oppo.png';
import samsung from '../../assets/brands/samsung.png';
import zara from '../../assets/brands/zara.png';
import apparel1 from '../../assets/products/apparel1.jpg';
import apparel2 from '../../assets/products/apparel2.jpg';
import apparel3 from '../../assets/products/apparel3.jpg';
import apparel4 from '../../assets/products/apparel4.jpg';
import apparel5 from '../../assets/products/apparel5.jpg';
import apparel6 from '../../assets/products/apparel6.jpg';
import electronic1 from '../../assets/products/electronic1.jpg';
import electronic2 from '../../assets/products/electronic2.jpg';
import electronic3 from '../../assets/products/electronic3.jpg';
import electronic4 from '../../assets/products/electronic4.jpg';
import electronic5 from '../../assets/products/electronic5.jpg';
import home1 from '../../assets/products/home1.jpg';
import home2 from '../../assets/products/home2.jpg';
import home3 from '../../assets/products/home3.jpg';
import home4 from '../../assets/products/home4.jpg';
import home5 from '../../assets/products/home5.jpg';
import shoe1 from '../../assets/products/shoe1.jpg';
import shoe2 from '../../assets/products/shoe2.jpg';
import shoe3 from '../../assets/products/shoe3.jpg';
import shoe4 from '../../assets/products/shoe4.jpg';
import shoe5 from '../../assets/products/shoe5.jpg';
import shoe6 from '../../assets/products/shoe6.jpg';
import shoe7 from '../../assets/products/shoe7.jpg';
import shoe8 from '../../assets/products/shoe8.jpg';
import slider0 from '../../assets/slider/slider0.jpg';
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';


const images = {
    banner1: banner1,
    banner2: banner2,
    procat1: procat1,
    procat2: procat2,
    procat3: procat3,
    asus: asus,
    dng: dng,
    hurley: hurley,
    oppo: oppo,
    samsung: samsung,
    zara: zara,
    apparel1: apparel1,
    apparel2: apparel2,
    apparel3: apparel3,
    apparel4: apparel4,
    apparel5: apparel5,
    apparel6: apparel6,
    electronic1: electronic1,
    electronic2: electronic2,
    electronic3: electronic3,
    electronic4: electronic4,
    electronic5: electronic5,
    home1: home1,
    home2: home2,
    home3: home3,
    home4: home4,
    home5: home5,
    shoe1: shoe1,
    shoe2: shoe2,
    shoe3: shoe3,
    shoe4: shoe4,
    shoe5: shoe5,
    shoe6: shoe6,
    shoe7: shoe7,
    shoe8: shoe8,
    slider0: slider0,
    slider1: slider1,
    slider2: slider2,
    slider3: slider3,
  };

  const Information = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className={`has-child ${isOpen ? 'expand' : ''}`}>
        <a href="#0" className="icon-small" onClick={handleToggle}>
          Information
        </a>
        <ul className={`content ${isOpen ? 'expand' : ''}`}>
          <li>
            <span>Brands</span> <span>Nike</span>
          </li>
          <li>
            <span>Activity</span> <span>Running</span>
          </li>
          <li>
            <span>Material</span> <span>Fleece</span>
          </li>
          <li>
            <span>Gender</span> <span>Men</span>
          </li>
        </ul>
      </li>
    );
  };

  const Details = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className={`has-child ${isOpen ? 'expand' : ''}`}>
        <a href="#0" className="icon-small" onClick={handleToggle}>
          Details
        </a>
        <div className={`content ${isOpen ? 'expand' : ''}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere numquam excepturi illum ad dignissimos explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolor perspiciatis animi praesentium itaque, sequi deserunt dolores quam facilis fugit, doloremque atque commodi iste obcaecati.
          </p>
        </div>
      </li>
    );
  };

const Custom = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`has-child ${isOpen ? 'expand' : ''}`}>
      <a href="#0" className="icon-small" onClick={handleToggle}>
        Custom
      </a>
      <div className={`content ${isOpen ? 'expand' : ''}`}>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Bust <span className="mini-text">(cm)</span></th>
              <th>Waist <span className="mini-text">(cm)</span></th>
              <th>Hip <span className="mini-text">(cm)</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>XS</td>
                <td>82,5</td>
                <td>62</td>
                <td>87,5</td>
            </tr>
            <tr>
                <td>S</td>
                <td>85</td>
                <td>63,5</td>
                <td>89</td>
            </tr>
            <tr>
                <td>M</td>
                <td>87,5</td>
                <td>67,5</td>
                <td>93</td>
            </tr>
            <tr>
                <td>L</td>
                <td>90</td>
                <td>72,5</td>
                <td>98</td>
            </tr>
            <tr>
                <td>XL</td>
                <td>93</td>
                <td>77.5</td>
                <td>103</td>
            </tr>
        </tbody>
        </table>
      </div>
    </li>
  );
};

const Review = () => {

    const [isOpen, setIsOpen] = useState(true);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className={`has-child ${isOpen ? 'expand' : ''}`}>
        <a href="#" className="icon-small" onClick={handleToggle}>Review<span className="mini-text">2.2k</span></a>
        <div className={`content ${isOpen ? 'expand' : ''}`}>
          <div className="review-block-body">
            {
                <ul>
                <li class="item">
                    <div class="review-from">
                        <p class="person">Review by Sarah</p>
                        <p class="mini-text">On 7/7/22</p>
                    </div>
                    <div class="review-reting rating">
                        <div class="stars"></div>
                    </div>
                    <div class="review-title">
                        <p>Awesome product!</p>
                    </div>
                    <div class="review-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam est reiciendis esse nisi non suscipit dolore perspiciatis amet maiores.</p>
                    </div>
                </li>
                <li class="item">
                    <div class="review-from">
                        <p class="person">Review by Sarah</p>
                        <p class="mini-text">On 7/7/22</p>
                    </div>
                    <div class="review-reting rating">
                        <div class="stars"></div>
                    </div>
                    <div class="review-title">
                        <p>Awesome product!</p>
                    </div>
                    <div class="review-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam est reiciendis esse nisi non suscipit dolore perspiciatis amet maiores.</p>
                    </div>
                </li>
            </ul>
            }
          </div>
          {isOpen && (
            <div id="review-rorm" className="review-form">
              {/* Форма отзыва */}
            </div>
          )}
        </div>
      </li>
    );
  };

const Single = () => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      if (!isNaN(value)) {
        setQuantity(Math.max(1, parseInt(value, 10)));
      }
    };

    const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  


    useEffect(() => {

       
        function copyMenu() {
        }
        copyMenu();
        const swiper = new Swiper('.big-image', {
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        },
        });


        return () => {
        swiper.destroy();
        


        };
        }, []); 



  return (
    <div id="page" class="site page-single">

        <aside class="site-off desktop-hide">
            <div class="off-canvas">
                <div class="canvas-head flexitem">
                    <div class="logo"><a href="/"><span class="circle"></span>.DJStore</a></div>
                    <a href="#" class="t-close flexcenter"><i class="ri-close-line"></i></a>
                </div>
                <div class="departments"></div>
                <nav></nav>
                <div class="thetop-nav"></div>
            </div>
        </aside>

        <header>
            <div class="header-top mobile-hide">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="left">
                            <ul class="flexitem main-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Featured Products</a></li>
                                <li><a href="#">Wishlist</a></li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul class="flexitem main-links">
                                 <li><a href="#">Sing Up</a></li>
                                 <li><a href="#">My Account</a></li>
                                 <li><a href="#">Order Tracking</a></li>
                                 <li><a href="#">USD <span class="icon-small"><i class="ri-arrow-down-s-line"></i></span></a>
                                     <ul>
                                        <li class="current"><a href="#">USD</a></li>
                                        <li><a href="#">EURO</a></li>
                                        <li><a href="#">GPB</a></li>
                                        <li><a href="#">IDR</a></li>
                                     </ul>
                                </li>
                                <li><a href="#">English <span class="icon-small"><i class="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li class="current"><a href="#">English</a></li>
                                        <li><a href="#">German</a></li>
                                        <li><a href="#">Spanish</a></li>
                                        <li><a href="#">Bahasa</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-nav">
                <div class="container">
                    <div class="wrapper flexitem">
                        <a href="#" class="trigger desktop-hide"><span class="i ri-menu-2-line"></span></a>
                        <div class="left flexitem">
                            <div class="logo"><a href="/"><span class="circle"></span>.DJStore</a></div>
                            <nav class="mobile-hide">
                                <ul class="flexitem second-links">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li class="has-child">
                                        <a href="#">Women
                                            <div class="icon-small"><i class="ri-arrow-down-s-line"></i></div>
                                        </a>
                                        <div class="mega">
                                            <div class="container">
                                                <div class="wrapper">
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Women's Clothing</h4>
                                                        <ul>
                                                            <li><a href="#">Dresses</a></li>
                                                            <li><a href="#">Tops & Tees</a></li>
                                                            <li><a href="#">Jackets & Coats</a></li>
                                                            <li><a href="#">Pants & Caprits</a></li>
                                                            <li><a href="#">Sweaters</a></li>
                                                            <li><a href="#">Costums</a></li>
                                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                                            <li><a href="#">Pajamas & Robes</a></li>
                                                            <li><a href="#">Shorts</a></li>
                                                            <li><a href="#">Swimwear</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Jewelry</h4>
                                                        <ul>
                                                            <li><a href="#">Accessories</a></li>
                                                            <li><a href="#">Bags & Purses</a></li>
                                                            <li><a href="#">Necklaces</a></li>
                                                            <li><a href="#">Rings</a></li>
                                                            <li><a href="#">Earrings</a></li>
                                                            <li><a href="#">Bracelets</a></li>
                                                            <li><a href="#">Body Jewelry</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Beauty</h4>
                                                        <ul>
                                                            <li><a href="#">Bath Accessories</a></li>
                                                            <li><a href="#">Makeup & Cosmetics</a></li>
                                                            <li><a href="#">Skin Care</a></li>
                                                            <li><a href="#">Hair Care</a></li>
                                                            <li><a href="#">Essential Oils</a></li>
                                                            <li><a href="#">Fragrances</a></li>
                                                            <li><a href="#">Soaps & Bath Bombs</a></li>
                                                            <li><a href="#">Face Masks & Coverings</a></li>
                                                            <li><a href="#">Spa Kits & Gifts</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol">
                                                        <div class="row">
                                                            <h4>Top Brands</h4>
                                                            <ul class="women-brands">
                                                                <li><a href="#">Nike</a></li>
                                                                <li><a href="#">Louis Vuitton</a></li>
                                                                <li><a href="#">Hermes</a></li>
                                                                <li><a href="#">Gucci</a></li>
                                                                <li><a href="#">Zalando</a></li>
                                                                <li><a href="#">Tiffany & Co.</a></li>
                                                                <li><a href="#">Zara</a></li>
                                                                <li><a href="#">H&M</a></li>
                                                                <li><a href="#">Cartier</a></li>
                                                                <li><a href="#">Chanel</a></li>
                                                                <li><a href="#">Hurley</a></li>
                                                            </ul>
                                                            <a href="#" class="view-all">View all brands <i class="ri-arrow-right-line"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="flexcol products">
                                                        <div class="row">
                                                            <div class="media">
                                                                <div class="thubnail object-covr">
                                                                    <a href="#">
                                                                        <img src={images.apparel4} alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="text-content">
                                                                <h4>Most wanted!</h4>
                                                                <a href="#" class="primary-button">Order Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#">Men</a></li>
                                    <li>
                                        <a href="#">Sports
                                            <div class="fly-item"><span>New!</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="right">
                            <ul class="flexitem second-links">
                                <li class="mobile-hide"><a href="#">
                                    <div class="icon-large"><i class="ri-heart-line"></i></div>
                                    <div class="fly-item"><span class="item-number">0</span></div>
                                </a></li>
                                <li><a href="#" class="iscart">
                                    <div class="icon-large">
                                        <i class="ri-shopping-cart-line"></i>
                                        <div class="fly-item"><span class="item-number">0</span></div>
                                    </div>
                                    <div class="icon-text">
                                        <div class="mini-text">Total</div>
                                        <div class="cart-total">$0.00</div>
                                    </div>
                                </a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-main mobile-hide">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="left">
                            <div class="dpt-cat">
                                <div className="dpt-head" onClick={toggleMenu}>
                                    <div class="main-text">All Departmens</div>
                                    <div class="mini-text mobile-hide">Total 1059 Products</div>
                                    <a href="#" class="dpt-trigger mobile-hide">
                                        <i class="ri-menu-3-line ri-xl"></i>
                                        <i class="ri-close-line ri-xl"></i>
                                    </a>
                                </div>
                                <div className={`dpt-menu ${isMenuVisible ? 'visible' : ''}`}>
                                    <ul class="second-links">
                                        <li class="has-child beauty">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-bear-smile-line"></i></div>
                                                Beauty
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Makeup</a></li>
                                                <li><a href="#">Skin Care</a></li>
                                                <li><a href="#">Hair Care</a></li>
                                                <li><a href="#">Fragrance</a></li>
                                                <li><a href="#">Foot & Hand Care</a></li>
                                                <li><a href="#">Tools & Accessories</a></li>
                                                <li><a href="#">Shave & Hair Removal</a></li>
                                                <li><a href="#">Personal Care</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child electric">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-bluetooth-connect-line"></i></div>
                                                Electronic
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Cell Phones</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">GPS & Navigation</a></li>
                                                <li><a href="#">Headphons</a></li>
                                                <li><a href="#">Home Audio</a></li>
                                                <li><a href="#">Television</a></li>
                                                <li><a href="#">Video Projectors</a></li>
                                                <li><a href="#">Wearable Technology</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-t-shirt-air-line"></i></div>
                                                Women's Fashion
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Jewelry</a></li>
                                                <li><a href="#">Watches</a></li>
                                                <li><a href="#">Handbags</a></li>
                                                <li><a href="#">Accessories</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-user-5-line"></i></div>
                                                Girl's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-shirt-line"></i></div>
                                                Men's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-user-6-line"></i></div>
                                                Boy's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-heart-pulse-line"></i></div>
                                                Health & Household
                                            </a>
                                        </li>
                                        <li class="has-child homekit">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-home-8-line"></i></div>
                                                Home & Kitchen
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <div class="mega">
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Kitchen & Dining</a></h4>
                                                        <ul>
                                                            <li><a href="#">Kitchen</a></li>
                                                            <li><a href="#">Dining Room</a></li>
                                                            <li><a href="#">Pantry</a></li>
                                                            <li><a href="#">Great Room</a></li>
                                                            <li><a href="#">Breakfast Room</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="row">
                                                        <h4><a href="#">Living</a></h4>
                                                        <ul>
                                                            <li><a href="#">Living Room</a></li>
                                                            <li><a href="#">Famely Room</a></li>
                                                            <li><a href="#">Sunroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Bed & Bath</a></h4>
                                                        <ul>
                                                            <li><a href="#">Bathroom</a></li>
                                                            <li><a href="#">Powder Room</a></li>
                                                            <li><a href="#">Bedroom</a></li>
                                                            <li><a href="#">Stronge & Closet</a></li>
                                                            <li><a href="#">Baby & Kids</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="row">
                                                        <h4><a href="#">Utility</a></h4>
                                                        <ul>
                                                            <li><a href="#">Laundry</a></li>
                                                            <li><a href="#">Garage</a></li>
                                                            <li><a href="#">Mudroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Outdoor</a></h4>
                                                        <ul>
                                                            <li><a href="#">Landscape</a></li>
                                                            <li><a href="#">Patio</a></li>
                                                            <li><a href="#">Deck</a></li>
                                                            <li><a href="#">Pool</a></li>
                                                            <li><a href="#">Backyard</a></li>
                                                            <li><a href="#">Porch</a></li>
                                                            <li><a href="#">Exterior</a></li>
                                                            <li><a href="#">Outdoor Kitchen</a></li>
                                                            <li><a href="#">Front Yard</a></li>
                                                            <li><a href="#">Driveway</a></li>
                                                            <li><a href="#">Poolhouse</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-android-line"></i></div>
                                                Pet Suplies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-basketball-line"></i></div>
                                                Sports
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-shield-star-line"></i></div>
                                                Best Seller
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="search-box">
                                <form action="" class="search">
                                    <span class="icon-large"><i class="ri-search-line"></i></span>
                                    <input type="search" placeholder="Search for products"/>
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

        <main>

            <div class="single-product">
                <div class="container">
                    <div class="wrapper">
                        <div class="breadcrumb">
                            <ul class="flexitem">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li>1</li>
                            </ul>
                        </div>

                        <div class="column">
                            <div class="products one">
                                <div class="flexwrap">
                                    <div class="row">
                                        <div class="item is_sticky">
                                            <div class="price">
                                                <span class="discount">32%<br/>OFF</span>
                                            </div>
                                            <div class="big-image">
                                                <div class="big-image-wrapper swiper-wrapper">
                                                    <div class="image-show swiper-slide">
                                                        <a data-fslightbox href="assets/products/shoe1.jpg"><img src={images.shoe1} alt=""/></a>
                                                    </div>
                                                    <div class="image-show swiper-slide">
                                                        <a data-fslightbox href="assets/products/shoe1-1.jpg"><img src={images.shoe5} alt=""/></a>
                                                    </div>
                                                    <div class="image-show swiper-slide">
                                                        <a data-fslightbox href="assets/products/shoe1-2.jpg"><img src={images.shoe6} alt=""/></a>
                                                    </div>
                                                    <div class="image-show swiper-slide">
                                                        <a data-fslightbox href="assets/products/shoe1-3.jpg"><img src={images.shoe7} alt=""/></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div thumbSlider="" class="small-image">
                                                <ul class="small-image-wrapper flexitem swiper-wrapper">
                                                    <li class="thumbnail-show swiper-slide">
                                                    <img src={images.shoe1} alt=""/>
                                                    </li>
                                                    <li class="thumbnail-show swiper-slide">
                                                    <img src={images.shoe5} alt=""/>
                                                    </li>
                                                    <li class="thumbnail-show swiper-slide">
                                                    <img src={images.shoe6} alt=""/>
                                                    </li>
                                                    <li class="thumbnail-show swiper-slide">
                                                    <img src={images.shoe7} alt=""/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="item">
                                            <h1>1</h1>
                                            <div class="content">
                                                <div class="ratiin">
                                                    <div class="stars"></div>   
                                                    <a href="#" class="mini-text">2,251 reviews</a>
                                                    <a href="" class="add-review mini-text">Add Your Review</a>
                                                </div>
                                                <div class="sock-sku">
                                                    <span class="available">In Stock</span>
                                                    <span class="sku mini-text">SKU-881</span>
                                                </div>
                                                <div class="price">
                                                    <span class="current">$80.90</span>
                                                    <span class="normal">$100</span>
                                                </div>
                                                <div class="colors">
                                                    <p>Colore</p>
                                                    <div class="variant">
                                                        <form action="">
                                                        <p><input type="radio" name="color" id="cogrey"/><label for="cogrey" class="circle"></label></p>
                                                        <p><input type="radio" name="color" id="coblue"/><label for="coblue" class="circle"></label></p>
                                                        <p><input type="radio" name="color" id="cogreen"/><label for="cogreen" class="circle"></label></p>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="sizes">
                                                    <p>Size</p>
                                                    <div class="variant">
                                                        <form action="">
                                                        <p><input type="radio" name="size" id="size-40"/><label for="size-40" class="circle"><span>40</span></label></p>
                                                        <p><input type="radio" name="size" id="size-41"/><label for="size-41" class="circle"><span>41</span></label></p>
                                                        <p> <input type="radio" name="size" id="size-42"/><label for="size-42" class="circle"><span>42</span></label></p>
                                                        <p><input type="radio" name="size" id="size-43"/><label for="size-43" class="circle"><span>43</span></label></p>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="actions">
                                                    <div class="qty-control flexitem">
                                                    <button className="minus circle" onClick={handleDecrement}>-</button>
                                                        <input type="text" value={quantity} onChange={handleInputChange}/>
                                                        <button className="plus circle" onClick={handleIncrement}>+</button>
                                                    </div>
                                                    <div class="bitton-cart"><button class="primary-button">Add to cart</button></div>
                                                    <div class="wish-share">
                                                        <ul class="flexitem second-links">
                                                            <li><a href="#">
                                                                <span class="icon-large"><i class="ri-heart-line"></i></span>
                                                                <span>Wishlist</span>
                                                            </a></li> 
                                                            <li><a href="#">
                                                                <span class="icon-large"><i class="ri-share-line"></i></span>
                                                                <span>Share</span>
                                                            </a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="description collapse">
                                                    <ul>
                                                        <Information />
                                                        <Details />
                                                        <Custom />
                                                        <Review />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="features">
                <div class="container">
                    <div class="wrapper">
                        <div class="column">
                            <div class="sectop flexitem">
                                <h2><span class="circle"></span><samp>Related products</samp></h2>
                                <div class="second-links">
                                    <a href="#" class="view-all">View all<i class="ri-arrow-right-line"></i></a>
                                </div>
                            </div>
                            <div class="products main flexwrap">
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#">
                                                <img src={images.apparel1} alt=""/>
                                            </a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>25%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(1.955)</span>
                                        </div>
                                        <h3><a href="#">Under Armour Men's Tech </a></h3>
                                        <div class="price">
                                            <span class="current">$56.50</span>
                                            <span class="normal mini-text">$75.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#"><img src={images.apparel2} alt=""/></a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>17%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(994)</span>
                                        </div>
                                        <h3><a href="#">Women's Lightweight Knit Hoodie Sweater Pulover</a></h3>
                                        <div class="price">
                                            <span class="current">$37.50</span>
                                            <span class="normal mini-text">$45.50</span>
                                        </div>
                                        
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Polyester, Cotton</li>
                                                <li>Pull On closure</li>
                                                <li>Fashion Personality</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#"><img src={images.apparel3} alt=""/></a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>31%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(3.459)</span>
                                        </div>
                                        <h3><a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
                                        <div class="price">
                                            <span class="current">$129.99</span>
                                            <span class="normal mini-text">$189.98</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>65% Polyester, 35% Cotton</li>
                                                <li>Imported</li>
                                                <li>Machine Wash</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bg-hover"></div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#"><img src={images.apparel4} alt=""/></a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>35%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(10)</span>
                                        </div>
                                        <h3><a href="#">Womens Summer Boho Floral</a></h3>
                                        <div class="price">
                                            <span class="current">$118.90</span>
                                            <span class="normal mini-text">$189.90</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Corduroy</li>
                                                <li>Imported</li>
                                                <li>Button closure closure</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#"><img src={images.shoe1} alt=""/></a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>32%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(2,251)</span>
                                        </div>
                                        <h3><a href="#">Men Slip On Shoes Casual with Arch Support</a></h3>
                                        <div class="price">
                                            <span class="current">$80.90</span>
                                            <span class="normal mini-text">$119.90</span>
                                        </div>
                                        <div class="footer">
                                            <ul class="mini-text">
                                                <li>Made in USA</li>
                                                <li>Rubber sole</li>
                                                <li>Durable leather overlays</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#"><img src={images.shoe2} alt=""/></a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>30%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(1.237)</span>
                                        </div>
                                        <h3><a href="#">Skechers Women's Go Joy Walking Shoe</a></h3>
                                        <div class="price">
                                            <span class="current">$45.95</span>
                                            <span class="normal mini-text">$64.95</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#"><img src={images.shoe3} alt=""/></a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>25%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(106)</span>
                                        </div>
                                        <h3><a href="#">Walking Shoe Sneaker Womens</a></h3>
                                        <div class="price">
                                            <span class="current">$139.99</span>
                                            <span class="normal mini-text">$189.98</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="media">
                                        <div class="thubnail object-cover">
                                            <a href="#"><img src={images.shoe4} alt=""/></a>
                                        </div>
                                        <div class="hoverable">
                                            <ul>
                                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                                <li><a href=""><i class="ri-eye-line"></i></a></li>
                                                <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="discount circle flexcenter"><span>24%</span></div>
                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                            <div class="stars"></div>
                                            <span class="mini-text">(25)</span>
                                        </div>
                                        <h3><a href="#">Womens Summer Tosca Shoe</a></h3>
                                        <div class="price">
                                            <span class="current">$104.90</span>
                                            <span class="normal mini-text">$189.90</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            

            <div class="banners">
                <div class="container">
                    <div class="wrapper">
                        <div class="column">
                            <div class="banner flexwrap">
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src={images.banner1} alt=""/>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Brutal Sale!</h4>
                                            <h3><span>Get the deal in here</span><br/>Living Room Chair</h3>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                        <a href="#" class="over-link"></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="item get-gray">
                                        <div class="image">
                                            <img src={images.banner2} alt=""/>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Brutal Sale!</h4>
                                            <h3><span>Discount everyday</span><br/>Office Outfit</h3>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                        <a href="#" class="over-link"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="product-categories flexwrap">
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src={images.procat1} alt=""/>
                                        </div>
                                        <div class="content mini-links">
                                            <h4>Beauty</h4>
                                            <ul class="flexcol">
                                                <li><a href="#">Makeup</a></li>
                                                <li><a href="#">Skin Care</a></li>
                                                <li><a href="#">Hair Care</a></li>
                                                <li><a href="#">Fragrance</a></li>
                                                <li><a href="#">Foot & Hand Care</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="#" class="view-all">View all<i class="ri-arrow-right-line"></i>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#">
                                                <img src={images.procat2} alt=""/>
                                            </a>
                                        </div>
                                        <div class="content mini-links">
                                            <h4><a href="#">Gatdets</a></h4>
                                            <ul class="flexcol">
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Call Phones</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">GPS & Navigation</a></li>
                                                <li><a href="#">Headphones</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="#" class="view-all">View all<i class="ri-arrow-right-line"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#">
                                                <img src={images.procat3} alt=""/>
                                            </a>
                                        </div>
                                        <div class="content mini-links">
                                            <h4><a href="#">Home Decor</a></h4>
                                            <ul class="flexcol">
                                                <li><a href="#">Kitchen</a></li>
                                                <li><a href="#">Dining Room</a></li>
                                                <li><a href="#">Pantry</a></li>
                                                <li><a href="#">Great Room</a></li>
                                                <li><a href="#">Breakfast Nook</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="#" class="view-all">View all<i class="ri-arrow-right-line"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <footer>
            <div class="newsletter">
                <div class="container">
                    <div class="wrapper">
                        <div class="box">
                            <div class="content">
                                <h3>Join Our newsletter</h3>
                                <p>Get E-mail updates about our latest shop and <strong>special offers</strong></p>
                            </div>
                            <form action="" class="search">
                                <span class="icon-large"><i class="ri-mail-line"></i></span>
                                <input type="mail" placeholder="Your email address" required/>
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="widgets">
                <div class="container">
                    <div class="wrapper">
                        <div class="flexwrap">
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Help & Contact</h4>
                                    <ul class="flexcol">
                                        <li><a href="#">Your Account</a></li>
                                        <li><a href="#">Your Orders</a></li>
                                        <li><a href="#">Shipping Rates</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Assistanat</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Product Cetegories</h4>
                                    <ul class="flexcol">
                                        <li><a href="#">Beauty</a></li>
                                        <li><a href="#">Electronic</a></li>
                                        <li><a href="#">Women's Fashion</a></li>
                                        <li><a href="#">Men's Fashion</a></li>
                                        <li><a href="#">Girl's Fashion</a></li>
                                        <li><a href="#">Boy's Fashion</a></li>
                                        <li><a href="#">Health & Household</a></li>
                                        <li><a href="#">Home & Kitchen</a></li>
                                        <li><a href="#">Pet Supplies</a></li>
                                        <li><a href="#">Sports</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Payment Info</h4>
                                    <ul class="flexcol">
                                        <li><a href="#">Bussiness Card</a></li>
                                        <li><a href="#">Shop with Points</a></li>
                                        <li><a href="#">Reload Your Balance</a></li>
                                        <li><a href="#">PayPal</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>About Us</h4>
                                    <ul class="flexcol">
                                        <li><a href="#">Company info</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Investors</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Policies</a></li>
                                        <li><a href="#">Customer reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-info">
                <div class="container">
                    <div class="wrapper">
                        <div class="flexcol">
                            <div class="logo">
                                <a href=""><span class="circle"></span>.DJStore</a>
                            </div>
                            <div class="socials">
                                <ul class="flexitem">
                                    <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                                    <li><a href="#"><i class="ri-facebook-line"></i></a></li>
                                    <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                                    <li><a href="#"><i class="ri-linkedin-line"></i></a></li>
                                    <li><a href="#"><i class="ri-youtube-line"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <p class="mini-text">Copyright 2023 .DJStore All right reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

        <div class="menu-bottom desktop-hide">
            <div class="container">
                <div class="wrapper">
                    <nav>
                        <ul class="flexitem">
                            <li>
                                <a href="#">
                                    <i class="ri-bar-chart-line"></i>
                                    <span>Trending</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-user-6-line"></i>
                                    <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="ri-heart-line"></i>
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0" class="t-search">
                                    <i class="ri-search-line"></i>
                                    <span>Search</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i class="ri-shopping-cart-line"></i>
                                    <span>Cart</span>
                                    <div class="fly-item">
                                        <span class="item-number">0</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <div class="search-bottom desktop-hide">
            <div class="container">
                <div class="wrapper">
                    
                    <form action="" class="search">
                        <a href="#" class="t-close search-close flexcenter"><i class="ri-close-line"></i></a>
                        <span class="icon-large"><i class="ri-search-line"></i></span>
                        <input type="search" placeholder="Your email address" required/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Single;