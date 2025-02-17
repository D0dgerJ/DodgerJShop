import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import axios from 'axios';
import Header from '../Header/Header';
import Brands from '../Brands/Brands'; 
import Banners from '../Banners/Banners';
import Footer from '../Footer/Footer';
import FeaturesSection from '../FeaturesSection/FeaturesSection'; 
import BigProductItem from '../BigProductItem/BigProductItem';
import { useParams, Link } from 'react-router-dom';
import StarRatingAverage from './StarRatingAverage';

import apparel4 from '../../assets/products/apparel4.jpg';
import slider0 from '../../assets/slider/slider0.jpg';
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';


const images = {
    apparel4: apparel4,
    slider0: slider0,
    slider1: slider1,
    slider2: slider2,
    slider3: slider3,
  };
  
const Home = () => {

    const targetDate = new Date(); 
    targetDate.setDate(targetDate.getDate() + 1); 
  
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };
  
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const [productImages, setProductImages] = useState([]);
const [discountValue, setDiscountValue] = useState(0);
const [discounts, setDiscounts] = useState([]);
const [discountPercentages, setDiscountPercentages] = useState({});
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
  
    const fetchData = async () => {
      try {
        const [productsResponse, productImagesResponse, discountsResponse] = await Promise.all([
          axios.get('http://localhost:5000/products'),
          axios.get(`http://localhost:5000/product_images?product_id=${productId}`),
          axios.get(`http://localhost:5000/discounts`)
        ]);
  
        setProducts(productsResponse.data);
        setProductImages(productImagesResponse.data);
        setDiscounts(discountsResponse.data);

        const discountPercentagesMap = discountsResponse.data.reduce((acc, discount) => {
            acc[discount.discount_id] = discount.discount_percentage;
            return acc;
          }, {});
      

        const selectedDiscount = discountsResponse.data.find(discount => discount.discount_id === productsResponse.data.discount_id);

    if (selectedDiscount) {
      setDiscountValue(selectedDiscount.discount_percentage);
    }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
  
    fetchData();
  
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  
    return () => {
      swiper.destroy();
      clearInterval(timer);
    };
  }, [productId]);
  

  useEffect(() => {
    loadProducts();
}, []);

const loadProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching products', error);
    }
};




  return (
    <div id="page" className="site page-home">

    <aside className="site-off desktop-hide">
        <div className="off-canvas">
            <div className="canvas-head flexitem">
                <div className="logo"><a href="/"><span className="circle"></span>.DJStore</a></div>
                <a href="#" className="t-close flexcenter"><i className="ri-close-line"></i></a>
            </div>
            <div className="departments"></div>
            <nav></nav>
            <div className="thetop-nav"></div>
        </div>
    </aside>

    <Header />

    <main>
        <div className="slider">
            <div className="container">
                <div className="wrapper">
                    <div className="myslider swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="item">
                                    <div className="image object-cover">
                                        <img src={images.slider0} alt=""/>
                                    </div>
                                    <div className="text-content flexcol">
                                        <h4>Shoes Fashion</h4>
                                        <h2><span>Come and Get it!</span><br/><span>Brand New Shoes</span></h2>
                                        <a href="/Category" className="primary-button">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="item">
                                    <div className="image object-cover">
                                        <img src={images.slider1} alt=""/>
                                    </div>
                                    <div className="text-content flexcol">
                                        <h4>Quick Fashion</h4>
                                        <h2><span>Fit Your Wardrobe</span><br/><span>WITH LUXURYITEMS</span></h2>
                                        <a href="/Category" className="primary-button">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="item">
                                    <div className="image object-cover">
                                        <img src={images.slider2} alt=""/>
                                    </div>
                                    <div className="text-content flexcol">
                                        <h4>Quick Offer</h4>
                                        <h2><span>Wooden Minimal Sofa</span><br/><span>EXTRA 50% OFF</span></h2>
                                        <a href="/Category" className="primary-button">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="item">
                                    <div className="image object-cover">
                                        <img src={images.slider3} alt=""/>
                                    </div>
                                    <div className="text-content flexcol">
                                        <h4>Best Deals</h4>
                                        <h2><span>Come and Get it!</span><br/><span>PUSH THE LIMIT</span></h2>
                                        <a href="/Category" className="primary-button">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>

        <Brands />

        <div className="trending">
            <div className="container">
                <div className="wrapper">
                    <div className="sectop flexitem">
                        <h2><span className="circle"></span><samp>Trending Products</samp></h2>
                    </div>
                    <div className="column">
                        <div className="flexwrap">
                          <BigProductItem />
                            <div className="row products mini">
                            {products.filter(product => [6, 7, 17, 3].includes(product.product_id)).map(product => (
                                <div className="item" key={product.product_id}>
                                    <div className="media">
                                    <div className="thumbnail object-cover">
                                        {productImages.filter(image => image.product_id === product.product_id).map(image => (
                                            <a href="#" key={image.image_id}>
                                                <Link to={`/products/${product.product_id}`}><img src={image.image_url} alt={`Product Image: ${image.image_id}`} /></Link>
                                            </a>
                                        ))}
                                        {productImages.filter(image => image.product_id === product.product_id).length === 0 && (
                                            <span>Изображение недоступно</span>
                                        )}
                                    </div>
                                    <div className="hoverable">
                                        <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                                        <li><a href=""><i className="ri-eye-line"></i></a></li>
                                        <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                                        </ul>
                                    </div>
                                    {discountPercentages[product.discount_id] ? (
                                    <div className="discount circle flexcenter"><span>{discountPercentages[product.discount_id]}%</span></div>
                                    ) : null}
                                    </div>
                                    <div className="content">
                                    <h3 className="main-links"><Link to={`/products/${product.product_id}`}>{product.name}</Link></h3>
                                    <StarRatingAverage avg_rating={product.avg_rating || 0} review_count={product.review_count || 0} />
                                    <div className="price">
                                        {product.discount_id && discounts.length > 0 ? (
                                            <>
                                            <span className="current">${(product.price - (product.price * discounts.find(discount => discount.discount_id === product.discount_id).discount_percentage) / 100).toFixed(2)}</span>
                                            <span className="normal mini-text">${product.price}</span>
                                            </>
                                        ) : (
                                            <span className="current">${product.price}</span>
                                        )}
                                    </div>
                                    <div className="mini-text">
                                        <p>2975 sold</p>
                                        <p>Free Shipping</p>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="row products mini">
                            {products.filter(product => [8, 19, 5, 18].includes(product.product_id)).map(product => (
                                <div className="item" key={product.product_id}>
                                    <div className="media">
                                    <div className="thumbnail object-cover">
                                        {productImages.filter(image => image.product_id === product.product_id).map(image => (
                                            <a href="#" key={image.image_id}>
                                            <img src={image.image_url} alt={`Product Image: ${image.image_id}`} />
                                            </a>
                                        ))}
                                        {productImages.filter(image => image.product_id === product.product_id).length === 0 && (
                                            <span>Изображение недоступно</span>
                                        )}
                                    </div>
                                    <div className="hoverable">
                                        <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                                        <li><a href=""><i className="ri-eye-line"></i></a></li>
                                        <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                                        </ul>
                                    </div>
                                    {discountPercentages[product.discount_id] ? (
                                    <div className="discount circle flexcenter"><span>{discountPercentages[product.discount_id]}%</span></div>
                                    ) : null}
                                    </div>
                                    <div className="content">
                                    <h3 className="main-links"><a href="#">{product.name}</a></h3>
                                    <StarRatingAverage avg_rating={product.avg_rating || 0} review_count={product.review_count || 0} />
                                    <div className="price">
                                        {product.discount_id && discounts.length > 0 ? (
                                            <>
                                            <span className="current">${(product.price - (product.price * discounts.find(discount => discount.discount_id === product.discount_id).discount_percentage) / 100).toFixed(2)}</span>
                                            <span className="normal mini-text">${product.price}</span>
                                            </>
                                        ) : (
                                            <span className="current">${product.price}</span>
                                        )}
                                    </div>
                                    <div className="mini-text">
                                        <p>2975 sold</p>
                                        <p>Free Shipping</p>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                    <a href="#" className="t-close search-close flexcenter"><i className="ri-close-line"></i></a>
                    <span className="icon-large"><i className="ri-search-line"></i></span>
                    <input type="search" placeholder="Your email address" required/>
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