import React, { useState, useEffect } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch('/api/wishlist', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        console.log('Wishlist data:', data); // Проверяем данные
        setWishlist(data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return <p>Loading wishlist...</p>;
  }

  if (wishlist.length === 0) {
    return <p>No items in your wishlist.</p>;
  }

  return (
    <div className="wishlist">
      <h2 className="wishlist-title">Wishlist</h2>
      <ul className="wishlist-list">
        {wishlist.map((product) => {
          // Преобразование данных в числа
          const price = parseFloat(product.price);
          const avgRating = parseFloat(product.avg_rating);

          return (
            <li key={product.product_id} className="wishlist-item">
              <div className="product-info">
                <img
                  src={product.product_image || '/placeholder-image.jpg'}
                  alt={product.product_name}
                  className="product-image"
                />
                <h3 className="product-name">{product.product_name}</h3>
                <div className="product-meta">
                  <span className="product-price">
                    {typeof price === 'number' && !isNaN(price)
                      ? `$${price.toFixed(2)}`
                      : 'Price not available'}
                  </span>
                  {typeof avgRating === 'number' && !isNaN(avgRating) ? (
                    <span className="product-rating">
                      {avgRating.toFixed(1)} / 5 ({product.review_count || 0})
                    </span>
                  ) : (
                    <span className="product-rating">No reviews</span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
