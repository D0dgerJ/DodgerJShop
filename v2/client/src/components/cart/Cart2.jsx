import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

const Cart = () => {
  return (
    <div id="page" class="site page-cart">

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

        <Header />

        <main>

          <div class="single-cart">
            <div class="container">
                <div class="wrapper">
                    <div class="breadcrumb">
                        <ul class="flexitem">
                            <li><a href="#">Home</a></li>
                            <li>Cart</li>
                        </ul>
                    </div>
                      <div class="page-title">
                          <h1>Shopping Cart</h1>
                      </div>
                      <div class="products one cart">
                        <div class="flexwrap">
                            <form action="" class="form-cart">
                                <div class="item">
                                    <table id="cart-table">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Subtotal</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="flexitem">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#"><img src={images.home2} alt=""/></a>
                                                    </div>
                                                    <div class="content">
                                                        <strong><a href="#">Dimmable Ceiling Light Modern</a></strong>
                                                        <p>Color: Gold</p>
                                                    </div>
                                                </td>
                                                <td>$279.99</td>
                                                <td>
                                                    <div class="qty-control flexitem">
                                                        <button class="minus">-</button>
                                                        <input type="text" value="2" min="1"/>
                                                        <button class="plus">+</button>
                                                    </div> 
                                                </td>
                                                <td>$559.98</td>
                                                <td><a href="#" class="item-remove"><i class="ri-close-line"></i></a></td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="flexitem">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#">
                                                            <img src={images.home3} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <strong><a href="#">Modern Storage Cabinet with Door & 3 Drawers</a></strong>
                                                        <p>Type: Stand</p>

                                                    </div>
                                                </td>
                                                <td>$129.99</td>
                                                <td>
                                                    <div class="qty-control flexitem">
                                                        <button class="minus" aria-label="Reduce quantity">-</button>
                                                        <input type="text" value="1" min="1" name="quantity" id="quantity" class="quantity"/>
                                                        <button class="plus" aria-label="Increase quantity">+</button>
                                                    </div> 
                                                </td>
                                                <td>$129.99</td>
                                                <td><a href="#" class="item-remove"><i class="ri-close-line"></i></a></td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="flexitem">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#">
                                                            <img src={images.home4} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <strong><a href="#">Vonanda Velvet Sofa Couch</a></strong>
                                                    </div>
                                                </td>
                                                <td>$352.99</td>
                                                <td>
                                                    <div class="qty-control flexitem">
                                                        <button class="minus" aria-label="Reduce quantity">-</button>
                                                        <input type="text" value="1" min="1" name="quantity" id="quantity" class="quantity"/>
                                                        <button class="plus" aria-label="Increase quantity">+</button>
                                                    </div> 
                                                </td>
                                                <td>$352.99</td>
                                                <td><a href="#" class="item-remove"><i class="ri-close-line"></i></a></td>
                                            </tr>

                                            <tr>
                                                <td class="flexitem">
                                                    <div class="thumbnail object-cover">
                                                        <a href="#">
                                                            <img src={images.home5} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <strong><a href="#">Awesome Bed for a Couple</a></strong>
                                                        <p>Type: King Size</p>

                                                    </div>
                                                </td>
                                                <td>$579.99</td>
                                                <td>
                                                    <div class="qty-control flexitem">
                                                        <button class="minus" aria-label="Reduce quantity">-</button>
                                                        <input type="text" value="1" min="1" name="quantity" id="quantity" class="quantity"/>
                                                        <button class="plus" aria-label="Increase quantity">+</button>
                                                    </div> 
                                                </td>
                                                <td>$579.99</td>
                                                <td><a href="#" class="item-remove"><i class="ri-close-line"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <div class="cart-summary styled">
                                <div class="item">
                                    <div class="coupon">
                                        <input type="text" placeholder="Enter coupon"/>
                                        <button>Apply</button>
                                    </div>
                                    <div class="shipping-rate collapse">
                                        <div class="has-child expand">
                                            <a href="#" class="icon-smalll">Estimate Shipping and Tax</a>
                                            <div class="content">
                                                <div class="countries">
                                                    <form action="">
                                                        <label for="country">Country</label> 
                                                        <select name="country" id="country">
                                                            <option value=""></option>
                                                            <option value="1">Afganistan</option>
                                                            <option value="2">Aland Islan</option>
                                                            <option value="3">Albania</option>
                                                            <option value="4" selected="selected">United States</option>
                                                            <option value="5">Others</option>
                                                        </select>
                                                    </form>
                                                </div>
                                                <div class="states">
                                                    <form action="">
                                                        <label for="state">State/Province</label> 
                                                        <select name="state" id="state">
                                                            <option value="">Select a region, state or province</option>
                                                            <option value="1">Alabama</option>
                                                            <option value="2">Alaska</option>
                                                            <option value="3">American Samoa</option>
                                                            <option value="4">Arizona</option>
                                                            <option value="5">Arkansas</option>
                                                            <option value="6">Others</option>
                                                        </select>
                                                    </form>
                                                </div>
                                                <div class="postal-code">
                                                    <form action="">
                                                        <label for="postal">Zip/Postal Code</label>
                                                        <input type="number" name="postal" id="postal"/>
                                                    </form>
                                                </div>
                                                <div class="rate-options variant">
                                                    <form action="">
                                                        <p>
                                                            <span>Flat: $10.00</span>
                                                            <input type="radio" name="rate-options" id="flat" checked/>
                                                            <label for="flat" class="circle"></label>
                                                        </p>
                                                        <p>
                                                            <span>Best: $0.00</span>
                                                            <input type="radio" name="rate-options" id="flat"/>
                                                            <label for="best" class="circle"></label>
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart-total">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Subtotal</th>
                                                    <td>$2155.95</td>
                                                </tr>
                                                <tr>
                                                    <th>Discount</th>
                                                    <td>-$100.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping <span class="mini-text">(Flat)</span></th>
                                                    <td>$10.00</td>
                                                </tr>
                                                <tr class="grand-total">
                                                    <th>Total</th>
                                                    <td><strong>$2065.95</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="/Cart" class="secondary-button">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
          </div>

        </main>

        <Footer />

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
    </div>
  );
};

export default Cart;