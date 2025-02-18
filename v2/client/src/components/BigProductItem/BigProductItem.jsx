import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useWishlist from '../../hooks/useWishlist';
import API_BASE from '../../api';

// Функция для расчета оставшегося времени
const calculateTimeRemaining = (targetDate) => {
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

const BigProductItem = () => {
  const [product, setProduct] = useState(null);
  const [productImage, setProductImage] = useState(null); // Для хранения картинки продукта
  const [timeRemaining, setTimeRemaining] = useState({});
  const [discountValue, setDiscountValue] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Загружаем данные о продуктах и скидках
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Получаем список всех продуктов
        const productsResponse = await axios.get(`${API_BASE}/products`);
        
        // Получаем список всех активных скидок
        const promotionsResponse = await axios.get(`${API_BASE}/api/featured-promotions`);

        if (promotionsResponse.data.length > 0) {
          const promotion = promotionsResponse.data[0]; // Выбираем первый активный продукт со скидкой
          const productResponse = productsResponse.data.find(prod => prod.product_id === promotion.product_id);

          if (productResponse) {
            setProduct(productResponse);
            setDiscountValue(promotion.discount_percentage);

            // Загружаем картинку для данного продукта
            const productImagesResponse = await axios.get(`${API_BASE}/product_images?product_id=${productResponse.product_id}`);
            if (productImagesResponse.data.length > 0) {
              setProductImage(productImagesResponse.data[0].image_url); // Используем первую картинку продукта
            }

            // Расчет времени до конца акции
            const targetDate = new Date(promotion.end_date);
            setTimeRemaining(calculateTimeRemaining(targetDate));

            // Установка таймера для обновления времени
            const timer = setInterval(() => {
              setTimeRemaining(calculateTimeRemaining(targetDate));
            }, 1000);

            return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
          }
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных', error);
      }
    };

    fetchData();
  }, []);

  if (!product || !productImage) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="row products big">
      <div className="item">
        <div className="offer">
          <p>Offer ends at</p>
          <ul className="flexcenter">
            <li>{timeRemaining.days}</li>
            <li>{timeRemaining.hours}</li>
            <li>{timeRemaining.minutes}</li>
            <li>{timeRemaining.seconds}</li>
          </ul>
        </div>
        <div className="media">
          <div className="image">
            <Link to={`/offer/${product.product_id}`}>
              <img src={productImage} alt={product.name} /> {/* Динамическая картинка */}
            </Link>
          </div>
          <div className="hoverable">
            <ul>
              <li className="active"><a href="#" onClick={(e) => { e.preventDefault(); if (isInWishlist(product.product_id)) { removeFromWishlist(product.product_id); } else {addToWishlist(product.product_id); }}} ><i className="ri-heart-line"></i></a></li>
              <li><a href=""><i className="ri-eye-line"></i></a></li>
              <li><a href=""><i className="ri-shuffle-line"></i></a></li>
            </ul>
          </div>
          <div className="discount circle flexcenter"><span>{Math.floor(discountValue)}%</span></div>
        </div>
        <div className="content">
          <div className="rating">
            <div className="stars"></div>
            <span className="mini-text">(2,548)</span>
          </div>
          <h3 className="main-links"><a href={`/offer/${product.product_id}`}>{product.name}</a></h3>
          <div className="price">
            <span className="current">${(product.price - (product.price * discountValue / 100)).toFixed(2)}</span>
            <span className="normal mini-text">${product.price}</span>
          </div>
          <div className="stock mini-text">
            <div className="qty">
              <span>Stock: <strong className="qty-available">{product.stock_quantity}</strong></span>
              <span>Sold: <strong className="qty-sold">3,459</strong></span>
            </div>
            <div className="bar">
              <div className="available"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigProductItem;
