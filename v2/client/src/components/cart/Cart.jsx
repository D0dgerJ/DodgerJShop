import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from "../../CartContext/CartContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import API_BASE from '../../api';


const Cart = () => {
const { cart, setCart } = useCart();
const [products, setProducts] = useState([]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...prevCart,
        items: updatedItems,
        totalQuantity,
        totalPrice,
      };
    });
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter(
        (item) => item.product_id !== productId
      );
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...prevCart,
        items: updatedItems,
        totalQuantity,
        totalPrice,
      };
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('${API_BASE}/products_with_images');
        setProducts(response.data); // Здесь данные будут содержать продукты с массивом `images`
      } catch (error) {
        console.error('Error fetching products with images:', error);
      }
    };
  
    fetchProducts();
  }, []);
  


  return (
    <div id="page" className="site page-cart">

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

          <div className="single-cart">
            <div className="container">
                <div className="wrapper">
                    <div className="breadcrumb">
                        <ul className="flexitem">
                            <li><a href="#">Home</a></li>
                            <li>Cart</li>
                        </ul>
                    </div>
                      <div className="page-title">
                          <h1>Shopping Cart</h1>
                      </div>
                      <div className="products one cart">
                        <div className="flexwrap">
                            {cart.items.length === 0 ? (
                                <div className="empty-cart">
                                <h2>Your cart is empty</h2>
                                <p>
                                    Looks like you haven't added anything to your cart yet. Start shopping!
                                </p>
                                <a href="/" className="primary-button">Go to Shop</a>
                                </div>
                            ) : (
                                <form action="" className="form-cart">
                                    <div className="item">
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
                                                {cart.items.map((item, index) => {
                                                    const product = products.find((prod) => prod.product_id === item.product_id);
                                                    return (
                                                    <tr key={item.product_id || index}>
                                                        <td className="flexitem">
                                                        <div className="thumbnail object-cover">
                                                            <a href="#">
                                                            <img
                                                                src={product?.images?.[0] || 'placeholder.png'}
                                                                alt={item.name}
                                                            />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <strong>
                                                            <a href="#">{item.name}</a>
                                                            </strong>
                                                        </div>
                                                        </td>
                                                        <td>${!isNaN(item.price) ? parseFloat(item.price).toFixed(2) : "N/A"}</td>
                                                        <td>
                                                             <div className="qty-control flexitem">
                                                                <button
                                                                type="button"
                                                                className="minus"
                                                                onClick={() =>
                                                                    handleQuantityChange(item.product_id, item.quantity - 1)
                                                                }
                                                                >
                                                                -
                                                                </button>
                                                                <input
                                                                type="number"
                                                                value={item.quantity}
                                                                onChange={(e) =>
                                                                    handleQuantityChange(item.product_id, +e.target.value)
                                                                }
                                                                />
                                                                <button
                                                                type="button"
                                                                className="plus"
                                                                onClick={() =>
                                                                    handleQuantityChange(item.product_id, item.quantity + 1)
                                                                }
                                                                >
                                                                +
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>${!isNaN(item.price) ? (parseFloat(item.price) * item.quantity).toFixed(2) : "N/A"}</td>
                                                        <td>
                                                        <a
                                                            href="#"
                                                            className="item-remove"
                                                            onClick={() => handleRemoveItem(item.product_id)}
                                                        >
                                                            <i className="ri-close-line"></i>
                                                        </a>
                                                        </td>
                                                    </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            )}
                            <div className="cart-summary styled">
                                <div className="item">
                                    <div className="coupon">
                                        <input type="text" placeholder="Enter coupon"/>
                                        <button>Apply</button>
                                    </div>
                                    <div className="shipping-rate collapse">
                                        <div className="has-child expand">
                                            <a href="#" className="icon-smalll">Estimate Shipping and Tax</a>
                                            <div className="content">
                                                <div className="countries">
                                                    <form action="">
                                                        <label htmlFor="country">Country</label> 
                                                        <select defaultValue="4">
                                                            <option value=""></option>
                                                            <option value="1">Afganistan</option>
                                                            <option value="2">Aland Islan</option>
                                                            <option value="3">Albania</option>
                                                            <option value="4">United States</option>
                                                            <option value="5">Others</option>
                                                        </select>
                                                    </form>
                                                </div>
                                                <div className="states">
                                                    <form action="">
                                                        <label htmlFor="state">State/Province</label> 
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
                                                <div className="postal-code">
                                                    <form action="">
                                                        <label htmlFor="postal">Zip/Postal Code</label>
                                                        <input type="number" name="postal" id="postal"/>
                                                    </form>
                                                </div>
                                                <div className="rate-options variant">
                                                    <form action="">
                                                        <p>
                                                            <span>Flat: $10.00</span>
                                                            <input
                                                            type="radio"
                                                            name="rate-options"
                                                            id="flat"
                                                            value="flat"
                                                            defaultChecked
                                                            />
                                                            <label htmlFor="flat" className="circle"></label>
                                                        </p>
                                                        <p>
                                                            <span>Best: $0.00</span>
                                                            <input type="radio" name="rate-options" id="flat"/>
                                                            <label htmlFor="best" className="circle"></label>
                                                        </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-total">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Subtotal</th>
                                                    <td>${cart.totalPrice.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Discount</th>
                                                    <td>-$100.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping <span className="mini-text">(Flat)</span></th>
                                                    <td>$10.00</td>
                                                </tr>
                                                <tr className="grand-total">
                                                    <th>Total</th>
                                                    <td>
                                                        <strong>
                                                            $
                                                            {(
                                                            cart.totalPrice - 100 + 10
                                                            ).toFixed(2)}
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="/Cart" className="secondary-button">Checkout</a>
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
                                <a href="#0" className="cart-trigger">
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
    </div>
  );
};

export default Cart;