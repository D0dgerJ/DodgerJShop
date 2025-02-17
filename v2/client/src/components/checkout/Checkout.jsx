import React from 'react';
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

const Checkout = () => {
  return (
    <div id="page" class="site page-checkout">

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
                                <li class="iscart"><a href="#">
                                    <div class="icon-large">
                                        <i class="ri-shopping-cart-line"></i>
                                        <div class="fly-item"><span class="item-number">5</span></div>
                                    </div>
                                    <div class="icon-text">
                                        <div class="mini-text">Total</div>
                                        <div class="cart-total">$1,622</div>
                                    </div>
                                </a>

                                <div class="mini-cart">
                                    <div class="content">
                                        <div class="cart-head">
                                            5 items in cart 
                                        </div>
                                        <div class="cart-body">
                                            <ul class="products mini">
                                                <li class="item">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#"><img src={images.home2} alt=""/></a>
                                                    </div>
                                                    <div class="item-content">
                                                        <p><a href="#">Dimmable Ceiling Light Modern</a></p>
                                                        <span class="price">
                                                            <span>$279.99</span>
                                                            <span class="fly-item"><span>2x</span></span>
                                                        </span>
                                                    </div>
                                                    <a href="" class="item-remove"><i class="ri-close-line"></i></a>
                                                </li>
                                                <li class="item">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#">
                                                            <img src={images.home3} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="item-content">
                                                        <p><a href="#">Modern Storage Cabinet with Door & 3 Drawers</a></p>
                                                        <span class="price">
                                                            <span>$129.99</span>
                                                            <span class="fly-item"><span>1x</span></span>
                                                        </span>
                                                    </div>
                                                    <a href="" class="item-remove"><i class="ri-close-line"></i></a>
                                                </li>
                                                <li class="item">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#">
                                                            <img src={images.home4} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="item-content">
                                                        <p><a href="#">Vonanda Velvet Sofa Couch</a></p>
                                                        <span class="price">
                                                            <span>$352.99</span>
                                                            <span class="fly-item"><span>1x</span></span>
                                                        </span>
                                                    </div>
                                                    <a href="" class="item-remove"><i class="ri-close-line"></i></a>
                                                </li>
                                                <li class="item">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#">
                                                            <img src={images.home5} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="item-content">
                                                        <p><a href="#">Awesome Bed for a Couple</a></p>
                                                        <span class="price">
                                                            <span>$579.99</span>
                                                            <span class="fly-item"><span>1x</span></span>
                                                        </span>
                                                    </div>
                                                    <a href="" class="item-remove"><i class="ri-close-line"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cart-footer">
                                            <div class="subtotal">
                                                <p>Subtotal</p>
                                                <p><strong>$1,622.95</strong></p>
                                            </div>
                                            <div class="actions">
                                                <a href="/cart.html" class="primary-button">Checkout</a>
                                                <a href="/Cart.html" class="secondary-button">View Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </li>
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
                                <div class="dpt-head">
                                    <div class="main-text">All Departmens</div>
                                    <div class="mini-text mobile-hide">Total 1059 Products</div>
                                    <a href="#" class="dpt-trigger mobile-hide">
                                        <i class="ri-menu-3-line ri-xl"></i>
                                        <i class="ri-close-line ri-xl"></i>
                                    </a>
                                </div>
                                <div class="dpt-menu">
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

          <div class="single-checkout">
            <div class="container">
                <div class="wrapper">
                    <div class="checkout flexwrap">
                        <div class="item left styled">
                            <h1>Shipping Address</h1>
                            <from action="'"> 
                                <p>
                                    <label for="email">Email Address <span></span></label>
                                    <input type="email" name="email" id="email" autocomplete="off" required/> 
                                </p>
                                <p>
                                    <label for="fname">First Name <span></span></label>
                                    <input type="text" id="fname" required/> 
                                </p>
                                <p>
                                    <label for="lname">Last Name <span></span></label>
                                    <input type="text" id="lname" required/> 
                                </p>
                                <p>
                                    <label for="cname">Company Name </label>
                                    <input type="text" id="cname"/> 
                                </p>
                                <p>
                                    <label for="address">Street Address <span></span></label>
                                    <input type="text" id="lname" required/> 
                                </p>
                                <p>
                                    <label for="city">City <span></span></label>
                                    <input type="text" id="city" required/> 
                                </p>
                                <p>
                                    <label for="state">State/Province <span></span></label>
                                    <input type="text" id="state" required/> 
                                </p>
                                <p>
                                    <label for="postal">Zip / Postal Code <span></span></label>
                                    <input type="number" id="postal" required/> 
                                </p>
                                <p>
                                    <label for="country">Country</label> 
                                    <select name="country" id="country">
                                        <option value=""></option>
                                        <option value="1">Afganistan</option>
                                        <option value="2">Aland Islan</option>
                                        <option value="3">Albania</option>
                                        <option value="4" selected="selected">United States</option>
                                        <option value="5">Others</option>
                                    </select>
                                </p>
                                <p>
                                    <label for="phone">Phone Number<span></span></label>
                                    <input type="number" id="phone" required/> 
                                </p>
                                <p>
                                    <label>Order Nots (optional)</label>
                                    <textarea cols="30" rows="10"></textarea>
                                </p>
                                <p class="checkset">
                                    <input type="checkbox" id="anaccount"/>
                                    <label for="anaccount">Create an account?</label>
                                </p>

                            </from>
                            <div class="shipping-methods">
                                <h2>Shipping Methods</h2>
                                <p class="checkset">
                                    <input type="radio" checked/>
                                    <label>$5.00 Flate Rate</label>
                                </p>
                            </div>
                            <div class="primary-checkout">
                                <button class="primary-button">Place Order</button>
                            </div>
                        </div>
                        <div class="item right">
                            <h2>Order Summary</h2>
                            <div class="summary-order is_sticky">
                                <div class="summary-totals">
                                    <ul>
                                        <li>
                                            <span>Subtotal</span>
                                            <span>$2155.95</span>
                                        </li>
                                        <li>
                                            <span>Discount</span>
                                            <span>-$100.00</span>
                                        </li>
                                        <li>
                                            <span>Shipping: Flat</span>
                                            <span>$10.00</span>
                                        </li>
                                        <li>
                                            <span>Total</span>
                                            <strong>$2065.95</strong>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="products mini">
                                    <li class="item">
                                        <div class="thumbnail object-cover">
                                            <img src={images.home2} alt=""/>
                                        </div>
                                        <div class="item-content">
                                            <p>Dimmable Ceiling Light Modern</p>
                                            <span class="price">
                                                <span>$279.00</span>
                                                <span>x 2</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="item">
                                        <div class="thumbnail object-cover">
                                            <img src={images.home3} alt=""/>
                                        </div>
                                        <div class="item-content">
                                            <p>Modern Storage Cabinet with Door & 3 Drawers</p>
                                            <span class="price">
                                                <span>$129.99</span>
                                                <span>x 1</span>
                                            </span>
                                        </div>

                                    </li>
                                    <li class="item">
                                        <div class="thumbnail object-cover">
                                            <img src={images.home4} alt=""/>
                                        </div>
                                        <div class="item-content">
                                            <p>Vonanda Velvet Sofa Couch</p>
                                            <span class="price">
                                                <span>$352.99</span>
                                                <span>x 1</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="item">
                                        <div class="thumbnail object-cover">
                                            <img src={images.home5} alt=""/>
                                        </div>
                                        <div class="item-content">
                                            <p>Awesom Bed for a Couple</p>
                                            <span class="price">
                                                <span>$579.99</span>
                                                <span>x 1</span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
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
                                <a href="#0" class="cart-trigger">
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

        <div id="modal" class="modal">
            <div class="contant flexcol">
                <div class="image object-cover">
                    <img src={images.apparel4} alt=""/>
                </div>
                <h2>Get the latest deals and coupons</h2>
                <p class="mobile-hide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium magnam modi, molestias ut fuga.</p>
                <form action="" class="search">
                    <span class="icon-large"><i class="ri-mail-line"></i></span>
                    <input type="mail" placeholder="Your email address"/>
                    <button>Subscribe</button>
                </form>
                <a href="#" class="mini-text">Do not show me this again</a>
                <a href="#" class="t-close modalclose flexcenter">
                    <i class="ri-close-line"></i>
                </a>
            </div>
        </div>

        <div class="backtotop">
            <a href="#" class="flexcol">
                <i class="ri-arrow-up-line"></i>
                <span>Top</span>
            </a>
        </div>

         <div class="overlay"></div>
    </div>
  );
};

export default Checkout;