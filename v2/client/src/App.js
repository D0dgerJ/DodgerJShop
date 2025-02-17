import logo from './logo.svg';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Category from './components/category/Category';
import Single from './components/single/Single';
import Offer from './components/offer/Offer';
import Cart from './components/cart/Cart';
import ProductList from '../src/Product/ProductList';
import ProductDetails from '../src/Product/ProductDetails';
import Accountpage from './components/account/Accountpage';
import { AuthProvider } from './components/account/AuthContext'; 
import { CartProvider } from "./CartContext/CartContext";
import './Style.css';
import React, { useState } from 'react';

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('profile');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Single" element={<Single />} />
            <Route path="/Offer/:productId" element={<Offer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route
              path="/Accountpage"
              element={
                <Accountpage
                  selectedMenuItem={selectedMenuItem}
                  handleMenuItemClick={handleMenuItemClick}
                />
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;