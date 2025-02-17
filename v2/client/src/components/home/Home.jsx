import React from "react";
import Header from "../Header/Header";
import Slider from '../Slider/Slider';
import Brands from "../Brands/Brands";
import Banners from "../Banners/Banners";
import Footer from "../Footer/Footer";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import Trending from "../Trending/Trending";

const Home = () => {

  return (
    <div id="page" className="site page-home">
      <aside className="site-off desktop-hide">
        <div className="off-canvas">
          <div className="canvas-head flexitem">
            <div className="logo">
              <a href="/">
                <span className="circle"></span>.DJStore
              </a>
            </div>
            <a href="#" className="t-close flexcenter">
              <i className="ri-close-line"></i>
            </a>
          </div>
          <div className="departments"></div>
          <nav></nav>
          <div className="thetop-nav"></div>
        </div>
      </aside>

      <Header />

      <main>
        <Slider />

        <Brands />

        <Trending />

        <FeaturesSection />

        <Banners />
      </main>

      <Footer />

      <div className="menu-bottom desktop-hide">
        <div className="container">
          <div className="wrapper">
            <nav>
              <ul className="flexitem">
                <li>
                  <a href="#">
                    <i className="ri-bar-chart-line"></i>
                    <span>Trending</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-user-6-line"></i>
                    <span>Account</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-heart-line"></i>
                    <span>Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="#0" className="t-search">
                    <i className="ri-search-line"></i>
                    <span>Search</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="ri-shopping-cart-line"></i>
                    <span>Cart</span>
                    <div className="fly-item">
                      <span className="item-number">0</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="search-bottom desktop-hide">
        <div className="container">
          <div className="wrapper">
            <form action="" className="search">
              <a href="#" className="t-close search-close flexcenter">
                <i className="ri-close-line"></i>
              </a>
              <span className="icon-large">
                <i className="ri-search-line"></i>
              </span>
              <input type="search" placeholder="Your email address" required />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </div>
  );
};

export default Home;
