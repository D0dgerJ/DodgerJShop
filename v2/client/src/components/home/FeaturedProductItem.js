import React, { useState, useEffect } from 'react';
import StarRatingAverage from './StarRatingAverage';
import { Link } from 'react-router-dom';

const FeaturedProductItem = ({ product, productImages, discountPercentages }) => {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeRemaining = (endDate) => {
        const now = new Date();
        const endTime = new Date(endDate);
        const difference = endTime - now;

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

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(product.end_date));
        }, 1000);

        return () => clearInterval(timer);
    }, [product.end_date]);

    return (
        <div className="product-item">
            <div className="offer-timer">
                <p>Offer ends at</p>
                <ul className="flexcenter">
                    <li>{timeRemaining.days}d</li>:
                    <li>{timeRemaining.hours}h</li>:
                    <li>{timeRemaining.minutes}m</li>:
                    <li>{timeRemaining.seconds}s</li>
                </ul>
            </div>

            <div className="image-section">
                {productImages.filter(image => image.product_id === product.product_id).map(image => (
                    <Link to={`/products/${product.product_id}`} key={image.image_id}>
                        <img src={image.image_url} alt={product.name} />
                    </Link>
                ))}

                {discountPercentages[product.discount_id] && (
                    <div className="discount-badge">
                        {discountPercentages[product.discount_id]}%
                    </div>
                )}
            </div>

            <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price">
                    {product.discount_id ? (
                        <>
                            <span className="current-price">
                                ${(product.price - (product.price * discountPercentages[product.discount_id]) / 100).toFixed(2)}
                            </span>
                            <span className="old-price">${product.price}</span>
                        </>
                    ) : (
                        <span className="current-price">${product.price}</span>
                    )}
                </div>

                <StarRatingAverage avg_rating={product.avg_rating || 0} review_count={product.review_count || 0} />

                <div className="stock-info">
                    <span>Stock: {product.stock}</span>
                    <span>Sold: {product.sold}</span>
                </div>
            </div>

            <div className="action-icons">
                <i className="ri-heart-line"></i>
            </div>
        </div>
    );
};

export default FeaturedProductItem;