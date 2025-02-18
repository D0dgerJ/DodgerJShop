import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../components/account/AuthContext';
import { useCart } from '../CartContext/CartContext';
import useProductData from '../hooks/useProductData';
import useWishlist from '../hooks/useWishlist';
import {
  fetchComments,
  addComment as addCommentService,
} from '../services/productService';
import Header from '../components/Header/Header';
import Banners from '../components/Banners/Banners';
import Footer from '../components/Footer/Footer';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';

const ProductDetails = () => {
  const { productId } = useParams();
  const { user } = useContext(AuthContext);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const { products, productImages, discounts, loading } = useProductData(productId);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => {
    return products.find((p) => p.product_id === parseInt(productId, 10));
  }, [products, productId]);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const fetchedComments = await fetchComments(productId);
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error loading comments:', error);
      }
    };

    loadComments();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Вы должны быть авторизованы, чтобы оставить комментарий.');
      return;
    }

    try {
      const newCommentData = await addCommentService({
        productId,
        customerId: user.customer_id,
        commentText: newComment,
        rating,
      });
      setComments((prev) => [newCommentData, ...prev]);
      setNewComment('');
      setRating(5);
    } catch (error) {
      console.error('Ошибка при добавлении комментария:', error);
    }
  };

  if (loading || !product) return <div>Loading...</div>;

  const discountPercent =
    discounts.find((discount) => discount.discount_id === product.discount_id)?.discount_percentage || 0;
  const discountedPrice = (product.price * (1 - discountPercent / 100)).toFixed(2);

  return (
    <div id="page" className="site page-single">
      <Header />

      <main>
        <div className="single-product">
          <div className="container">
            <div className="wrapper">
              <div className="breadcrumb">
                <ul className="flexitem">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li>{product.name}</li>
                </ul>
              </div>

              <div className="column">
                <div className="products one">
                  <div className="flexwrap">
                    <div className="row">
                      <div className="item">
                        <div className="price">
                          {product.discount_id && (
                            <span className="discount">{discountPercent}% OFF</span>
                          )}
                        </div>
                        <div className="big-image">
                          {productImages
                            .filter((image) => image.product_id === product.product_id)
                            .map((image) => (
                              <img
                                key={image.image_id}
                                src={image.image_url}
                                alt={`Product ${product.name}`}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="item">
                        <h1>{product.name}</h1>
                        <div className="price">
                          <span className="current">${discountedPrice}</span>
                          {discountPercent > 0 && (
                            <span className="normal">${product.price.toFixed(2)}</span>
                          )}
                        </div>

                        <div className="actions">
                          <div className="qty-control flexitem">
                            <button
                              className="minus circle"
                              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={quantity}
                              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                            />
                            <button
                              className="plus circle"
                              onClick={() => setQuantity((q) => q + 1)}
                            >
                              +
                            </button>
                          </div>
                          <button className="primary-button" onClick={handleAddToCart}>
                            Add to cart
                          </button>
                        </div>

                        <div className="wish-share">
                          <button
                            onClick={() =>
                              isInWishlist(product.product_id)
                                ? removeFromWishlist(product.product_id)
                                : addToWishlist(product.product_id)
                            }
                          >
                            {isInWishlist(product.product_id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comments">
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment..."
                  />
                  <button type="submit">Submit</button>
                </form>
                <ul>
                  {comments.map((comment) => (
                    <li key={comment.id}>
                      <p>{comment.comment_text}</p>
                      <span>Rating: {comment.rating}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FeaturesSection />
        <Banners />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
