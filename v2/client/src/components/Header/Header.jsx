import React, { useContext } from 'react';
import { AuthContext } from '../account/AuthContext';
import { useCart } from "../../CartContext/CartContext";
import useMenuVisibility from '../../hooks/useMenuVisibility';
import useProductActions from '../../hooks/useProductActions';
import apparel4 from '../../assets/products/apparel4.jpg';


const images = {
    apparel4: apparel4,
  };

  const Header = () => {
    const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
    const { isMenuVisible, toggleMenu } = useMenuVisibility();
    const { 
      searchQuery, 
      setSearchQuery, 
      searchResults, 
      handleSearch, 
      totalProducts 
    } = useProductActions();
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser(null);
      window.location.reload();
    };
    const { cart } = useCart();


    return (
        <header>
            <div className="header-top mobile-hide">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="left">
                            <ul className="flexitem main-links">
                                <li><a href="/ProductList">Blog</a></li>
                                <li><a href="/ProductList">Featured Products</a></li>
                                <li><a href="/products/:productId">Wishlist</a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul className="flexitem main-links">
                                {isAuthenticated ? (
                                    <li>
                                        <button onClick={handleLogout} className="common-button">
                                        Logout
                                        </button>
                                    </li>
                                ) : (
                                    <li><a href="/Accountpage">Sign Up</a></li>
                                )}
                                <li><a href="/Accountpage">My Account</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">USD <span className="icon-small"><i className="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li className="current"><a href="#">USD</a></li>
                                        <li><a href="#">EURO</a></li>
                                        <li><a href="#">GPB</a></li>
                                        <li><a href="#">IDR</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">English <span className="icon-small"><i className="ri-arrow-down-s-line"></i></span></a>
                                    <ul>
                                        <li className="current"><a href="#">English</a></li>
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
            <div className="header-nav">
                <div className="container">
                    <div className="wrapper flexitem">
                        <a href="#" className="trigger desktop-hide"><span className="i ri-menu-2-line"></span></a>
                        <div className="left flexitem">
                            <div className="logo"><a href="/"><span className="circle"></span>.DJStore</a></div>
                            <nav className="mobile-hide">
                                <ul className="flexitem second-links">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Category">Shop</a></li>
                                    <li className="has-child">
                                        <a href="/Category">Women
                                            <div className="icon-small"><i className="ri-arrow-down-s-line"></i></div>
                                        </a>
                                        <div className="mega">
                                            <div className="container">
                                                <div className="wrapper">
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Women's Clothing</h4>
                                                        <ul>
                                                            <li><a href="/Category">Dresses</a></li>
                                                            <li><a href="/Category">Tops & Tees</a></li>
                                                            <li><a href="/Category">Jackets & Coats</a></li>
                                                            <li><a href="/Category">Pants & Caprits</a></li>
                                                            <li><a href="/Category">Sweaters</a></li>
                                                            <li><a href="/Category">Costums</a></li>
                                                            <li><a href="/Category">Hoodies & Sweatshirts</a></li>
                                                            <li><a href="/Category">Pajamas & Robes</a></li>
                                                            <li><a href="/Category">Shorts</a></li>
                                                            <li><a href="/Category">Swimwear</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Jewelry</h4>
                                                        <ul>
                                                            <li><a href="/Category">Accessories</a></li>
                                                            <li><a href="/Category">Bags & Purses</a></li>
                                                            <li><a href="/Category">Necklaces</a></li>
                                                            <li><a href="/Category">Rings</a></li>
                                                            <li><a href="/Category">Earrings</a></li>
                                                            <li><a href="/Category">Bracelets</a></li>
                                                            <li><a href="/Category">Body Jewelry</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Beauty</h4>
                                                        <ul>
                                                            <li><a href="/Category">Bath Accessories</a></li>
                                                            <li><a href="/Category">Makeup & Cosmetics</a></li>
                                                            <li><a href="/Category">Skin Care</a></li>
                                                            <li><a href="/Category">Hair Care</a></li>
                                                            <li><a href="/Category">Essential Oils</a></li>
                                                            <li><a href="/Category">Fragrances</a></li>
                                                            <li><a href="/Category">Soaps & Bath Bombs</a></li>
                                                            <li><a href="/Category">Face Masks & Coverings</a></li>
                                                            <li><a href="/Category">Spa Kits & Gifts</a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Top Brands</h4>
                                                            <ul className="women-brands">
                                                                <li><a href="/Category">Louis Vuitton</a></li>
                                                                <li><a href="/Category">Nike</a></li>
                                                                <li><a href="/Category">Hermes</a></li>
                                                                <li><a href="/Category">Gucci</a></li>
                                                                <li><a href="/Category">Zalando</a></li>
                                                                <li><a href="/Category">Tiffany & Co.</a></li>
                                                                <li><a href="/Category">Zara</a></li>
                                                                <li><a href="/Category">H&M</a></li>
                                                                <li><a href="/Category">Cartier</a></li>
                                                                <li><a href="/Category">Chanel</a></li>
                                                                <li><a href="/Category">Hurley</a></li>
                                                            </ul>
                                                            <a href="/Category" className="view-all">View all brands <i className="ri-arrow-right-line"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol products">
                                                        <div className="row">
                                                            <div className="media">
                                                                <div className="thubnail object-covr">
                                                                    <a href="/Category">
                                                                        <img src={images.apparel4} alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="text-content">
                                                                <h4>Most wanted!</h4>
                                                                <a href="/Category" className="primary-button">Order Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="/Category">Men</a></li>
                                    <li>
                                        <a href="/Category">Sports
                                            <div className="fly-item"><span>New!</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <ul className="flexitem second-links">
                                <li className="mobile-hide"><a href="#">
                                    <div className="icon-large"><i className="ri-heart-line"></i></div>
                                    <div className="fly-item"><span className="item-number">0</span></div>
                                </a></li>
                                <li><a href="/Cart" className="iscart">
                                    <div className="icon-large">
                                        <i className="ri-shopping-cart-line"></i>
                                        <div className="fly-item"><span className="item-number">{cart.totalQuantity}</span></div>
                                    </div>
                                    <div className="icon-text">
                                        <div className="mini-text">Total</div>
                                        <div className="cart-total">${cart.totalPrice.toFixed(2)}</div>
                                    </div>
                                </a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-main mobile-hide">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="left">
                            <div className="dpt-cat">
                                <div className="dpt-head" onClick={toggleMenu}>
                                    <div className="main-text">All Departmens</div>
                                    <div className="mini-text mobile-hide">Total {totalProducts} Products</div>
                                    <a href="#" className="dpt-trigger mobile-hide">
                                        <i className="ri-menu-3-line ri-xl"></i>
                                    </a>
                                </div>
                                <div className={`dpt-menu ${isMenuVisible ? 'visible' : ''}`}>
                                    <ul className="second-links">
                                        <li className="has-child beauty">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-bear-smile-line"></i></div>
                                                Beauty
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
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
                                        <li className="has-child electric">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-bluetooth-connect-line"></i></div>
                                                Electronic
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
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
                                        <li className="has-child fashion">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-t-shirt-air-line"></i></div>
                                                Women's Fashion
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
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
                                                <div className="icon-large"><i className="ri-user-5-line"></i></div>
                                                Girl's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-shirt-line"></i></div>
                                                Men's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-user-6-line"></i></div>
                                                Boy's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-heart-pulse-line"></i></div>
                                                Health & Household
                                            </a>
                                        </li>
                                        <li className="has-child homekit">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-home-8-line"></i></div>
                                                Home & Kitchen
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <div className="mega">
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><a href="#">Kitchen & Dining</a></h4>
                                                        <ul>
                                                            <li><a href="#">Kitchen</a></li>
                                                            <li><a href="#">Dining Room</a></li>
                                                            <li><a href="#">Pantry</a></li>
                                                            <li><a href="#">Great Room</a></li>
                                                            <li><a href="#">Breakfast Room</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="row">
                                                        <h4><a href="#">Living</a></h4>
                                                        <ul>
                                                            <li><a href="#">Living Room</a></li>
                                                            <li><a href="#">Famely Room</a></li>
                                                            <li><a href="#">Sunroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><a href="#">Bed & Bath</a></h4>
                                                        <ul>
                                                            <li><a href="#">Bathroom</a></li>
                                                            <li><a href="#">Powder Room</a></li>
                                                            <li><a href="#">Bedroom</a></li>
                                                            <li><a href="#">Stronge & Closet</a></li>
                                                            <li><a href="#">Baby & Kids</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="row">
                                                        <h4><a href="#">Utility</a></h4>
                                                        <ul>
                                                            <li><a href="#">Laundry</a></li>
                                                            <li><a href="#">Garage</a></li>
                                                            <li><a href="#">Mudroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flexcol">
                                                    <div className="row">
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
                                                <div className="icon-large"><i className="ri-android-line"></i></div>
                                                Pet Suplies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-basketball-line"></i></div>
                                                Sports
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-shield-star-line"></i></div>
                                                Best Seller
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="search-box">
                                <form onSubmit={handleSearch} className="search">
                                    <span className="icon-large"><i className="ri-search-line"></i></span>
                                    <input type="search" placeholder="Search for products" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                                    <button type="submit">Search</button>
                                </form>
                                    {/* Отображение результатов поиска */}
                                <div className="search-results">
                                    {searchResults.map((result) => (
                                    <div key={result.id}>
                                        <a href={`/products/${result.id}`}>
                                            <p>{result.name}</p>
                                        </a>
                                        {/* Добавьте отображение других полей продукта, если необходимо */}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
