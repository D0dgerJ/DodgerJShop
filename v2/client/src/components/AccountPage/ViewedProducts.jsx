import React, { useState, useEffect } from 'react';

const ViewedProducts = () => {
  const [viewedProducts, setViewedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViewedProducts = async () => {
      try {
        const response = await fetch('/api/viewed-products', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();

        // Фильтруем, чтобы отображать только одну запись для каждого товара
        const uniqueProducts = data.reduce((acc, product) => {
          if (!acc[product.product_id]) {
            acc[product.product_id] = product;
          }
          return acc;
        }, {});

        setViewedProducts(Object.values(uniqueProducts));
      } catch (error) {
        console.error('Error fetching viewed products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchViewedProducts();
  }, []);

  if (loading) {
    return <p>Loading viewed products...</p>;
  }

  if (viewedProducts.length === 0) {
    return <p>No viewed products found.</p>;
  }

  return (
    <div className="viewed-products">
      <h2 className="reviews-title">Viewed Products</h2>
      <ul className="reviews-list">
        {viewedProducts.map((product) => (
          <li key={product.product_id} className="review-item">
            <div className="product-info">
              <img
                src={product.product_image || '/placeholder-image.jpg'}
                alt={product.product_name}
                className="product-image"
              />
              <h3 className="product-name">{product.product_name}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewedProducts;
