import React from 'react';

const StarRatingAverage = ({ avg_rating, review_count }) => {
    if (review_count === 0) {
        return null; // Ничего не отображаем, если отзывов нет
    }

    // Округляем рейтинг до ближайшего целого числа
    const roundedRating = Math.round(avg_rating);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span 
                key={i} 
                className={`star ${i <= roundedRating ? 'filled' : 'empty'}`} 
            >
                &#9733;
            </span>
        );
    }

    return (
        <div className="rating-container">
            <div className="stars-container">
                {stars}
            </div>
            <span className="review-count">
                ({review_count})
            </span>
        </div>
    );
};

export default StarRatingAverage;