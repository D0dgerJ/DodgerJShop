import React, { useState, useEffect } from 'react';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/user-comments', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        

        // Группируем отзывы по продукту и выбираем одно изображение на продукт
        const uniqueReviews = data.reduce((acc, review) => {
          if (!acc[review.product_id]) {
            acc[review.product_id] = review; // Сохраняем только один отзыв с изображением
          }
          return acc;
        }, {});

        setReviews(Object.values(uniqueReviews));
      } catch (error) {
        console.error('Error fetching user reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews found.</p>;
  }

  const renderStars = (rating) => {
    const validRating = Math.max(1, Math.min(parseInt(rating, 10), 5));
  
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < validRating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="user-reviews">
    <h2 className="reviews-title">My Reviews</h2>
    <ul className="reviews-list">
      {reviews.map((review) => {
        return (
          <li key={review.comment_id} className="review-item">
            <div className="product-info">
              <img
                src={review.image_url || '/placeholder-image.jpg'}
                alt={review.product_name}
                className="product-image"
              />
              <h3 className="product-name">{review.product_name}</h3>
            </div>
            <p className="review-text">{review.comment_text}</p>
            <div className="review-meta">
              <div className="rating">{renderStars(review.rating)}</div>
              <span className="review-date">{new Date(review.created_at).toLocaleDateString()}</span>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
  );
};

export default UserReviews;
