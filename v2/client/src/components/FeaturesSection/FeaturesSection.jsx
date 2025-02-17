import React from 'react';
import { Link } from 'react-router-dom';
import useProductData from '../../hooks/useProductData';
import StarRatingAverage from '../home/StarRatingAverage';
import useWishlist from '../../hooks/useWishlist';

const FeaturesSection = () => {
  const { products, productImages, discountPercentages, loading, error } = useProductData();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="features">
      <div className="container">
        <div className="wrapper">
          <div className="sectop flexitem">
            <h2>
              <span className="circle"></span>
              <samp>Featured Products</samp>
            </h2>
          </div>
          <div className="products main flexwrap">
            {products.slice(0, 8).map(product => (
              <div className="item" key={product.product_id}>
                <div className="media">
                  <div className="thumbnail object-cover">
                    {productImages
                      .filter(image => image.product_id === product.product_id)
                      .map(image => (
                        <Link to={`/products/${product.product_id}`} key={image.image_id}>
                          <img src={image.image_url} alt={`Product Image: ${image.image_id}`} />
                        </Link>
                      ))}
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isInWishlist(product.product_id)) {
                              removeFromWishlist(product.product_id);
                            } else {
                              addToWishlist(product.product_id);
                            }
                          }}
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {discountPercentages[product.discount_id] && (
                    <div className="discount circle flexcenter">
                      <span>{Math.floor(discountPercentages[product.discount_id])}%</span>
                    </div>
                  )}
                </div>
                <div className="content">
                  <h3>
                    <Link to={`/products/${product.product_id}`}>{product.name}</Link>
                  </h3>
                  {product.review_count > 0 && (
                    <div className="rating">
                      <StarRatingAverage
                        avg_rating={product.avg_rating || 0}
                        review_count={product.review_count || 0}
                      />
                    </div>
                  )}
                  <div className="price">
                    {product.discount_id && discountPercentages[product.discount_id] ? (
                      <>
                        <span className="current">
                          $
                          {(
                            product.price -
                            (product.price * discountPercentages[product.discount_id]) / 100
                          ).toFixed(2)}
                        </span>
                        <span className="normal mini-text">${product.price}</span>
                      </>
                    ) : (
                      <span className="current">${product.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
