import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../account/AuthContext';
import Information from '../ProductDetails/Information';
import Details from '../ProductDetails/Details';
import Custom from '../ProductDetails/Custom';
import Review from '../ProductDetails/Review';
import Swiper from 'swiper';
import Header from '../Header/Header';
import Banners from '../Banners/Banners';
import Footer from '../Footer/Footer';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import CountdownTimer from './CountdownTimer';
import apparel4 from '../../assets/products/apparel4.jpg';
import API_BASE from "../../api";


const images = {
    apparel4: apparel4,
  };


const Offer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);
  const [promotion, setPromotion] = useState(null);
  const { user } = useContext(AuthContext);
  
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    console.log('handleIncrement called');
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
        console.log('handleDecrement called');
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const handleInputChange = useCallback((event) => {
        console.log('handleInputChange called');
        const value = event.target.value;
        if (!isNaN(value)) {
          setQuantity(Math.max(1, parseInt(value, 10)));
        }
      }, []);      

      useEffect(() => {
        console.log('useEffect for fetching data called');
        const fetchData = async () => {
          try {
            const [
              productResponse,
              productImagesResponse,
              productsResponse,
              promotionsResponse,
              discountsResponse,
              commentsResponse
            ] = await Promise.all([
              axios.get(`${API_BASE}/products/${productId}`),
              axios.get(`${API_BASE}/product_images?product_id=${productId}`),
              axios.get(`${API_BASE}/products`),
              axios.get(`${API_BASE}/api/featured-promotions`),
              axios.get(`${API_BASE}/discounts`),
              axios.get(`${API_BASE}/api/comments/${productId}`)
            ]);
    
            setProduct(productResponse.data);
            setProductImages(productImagesResponse.data);
            setProducts(productsResponse.data);
            setDiscounts(discountsResponse.data);
            setComments(commentsResponse.data);
            setCommentsCount(commentsResponse.data.length);
    
            // Находим акцию для текущего продукта
            const activePromotion = promotionsResponse.data.find(promo => promo.product_id === parseInt(productId));
            if (activePromotion) {
              setPromotion(activePromotion);
            }
          } catch (error) {
            console.error('Ошибка при загрузке данных', error);
          }
        };
    
        fetchData();
      }, [productId]);;

      const handleCommentSubmit = async (e) => {
        e.preventDefault();
        console.log('handleCommentSubmit called');
    
        if (!user) {
          console.log('Пользователь не аутентифицирован');
          return;
        }
    
        try {
          const response = await axios.post(`${API_BASE}/api/comments`, {
            product_id: productId,
            customer_id: user.customer_id, // Используем реальный идентификатор пользователя
            comment_text: newComment,
            rating: rating,
          });
    
          setComments([response.data, ...comments]);
          setCommentsCount(commentsCount + 1);
          setNewComment('');
          setRating(5); // Сбрасываем рейтинг после отправки
        } catch (error) {
          console.error('Ошибка при добавлении комментария', error);
        }
      };

      const productImagesForCurrentProduct = useMemo(() => {
        console.log('productImagesForCurrentProduct memoized function called');
        return productImages
          .filter((image) => image.product_id === parseInt(productId, 10))
          .map((image) => ({
            image_id: image.image_id,
            image_url: image.image_url,
          }));
      }, [productImages, productId]);
      const additionalThumbnails = productImagesForCurrentProduct.slice(0, 4);

     

  if (!product || !productImages || productImages.length === 0) {
    return <div>Loading...!</div>;
  }
  
  const originalPrice = parseFloat(product.price) || 0;
  const discountPercent = promotion ? parseFloat(promotion.discount_percentage) : 0;
  const discountedPrice = originalPrice * (1 - discountPercent / 100);

  return (
    <div id="page" className="site page-home">

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

        <div className="single-product">
                 <div className="container">
                     <div className="wrapper">
                         <div className="breadcrumb">
                             <ul className="flexitem">
                                 <li><a href="#">Home</a></li>
                                 <li><a href="#">Shop</a></li>
                                 <li>{product.name}</li>
                             </ul>
                         </div>
 
                         <div className="column">
                             <div className="products one">
                                 <div className="flexwrap">
                                     <div className="row">
                                         <div className="item is_sticky">
                                            <div className="price">
                                                {promotion && (
                                                    <span className="discount">{discountPercent}%<br />OFF</span>
                                                )}
                                            </div>
                                             <div className="big-image">
                                                 <div className="big-image-wrapper swiper-wrapper">
                                                     {productImagesForCurrentProduct.map((image, index) => (
                                                     <div className="image-show swiper-slide" key={image.image_id}>
                                                         <a data-fslightbox href={image.image_url}>
                                                         <img src={image.image_url} alt={`Product ${product.product_id} - Photo ${image.image_id}`} />
                                                         </a>
                                                     </div>
                                                     ))}
                                                 </div>
                                                 <div className="swiper-button-next"></div>
                                                 <div className="swiper-button-prev"></div>
                                             </div>
                                             <div className="small-image">
                                                 <ul className="small-image-wrapper flexitem swiper-wrapper">
                                                     {additionalThumbnails.map((thumbnail, index) => (
                                                     <li className="thumbnail-show swiper-slide" key={thumbnail.image_id}>
                                                         <img src={thumbnail.image_url} alt={`Product ${product.product_id} - Photo ${thumbnail.image_id}`} />
                                                     </li>
                                                     ))}
                                                 </ul>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="row">
                                         <div className="item">
                                             <h1>{product.name}</h1>
                                             <div className="content">
                                                 <div className="sock-sku">
                                                     <span className="available">In Stock</span>
                                                     <span className="sku mini-text">SKU-881</span>
                                                 </div>
                                                    <div className="price">
                                                    {discountPercent > 0 ? (
                                                        <>
                                                        <span className="current">${discountedPrice.toFixed(2)}</span>
                                                        <span className="normal">${originalPrice.toFixed(2)}</span>
                                                        </>
                                                    ) : (
                                                        <span className="current">${originalPrice.toFixed(2)}</span>
                                                    )}
                                                    </div>
                                                 <div className="stock mini-text">
                                                    <span>Stock: {product.stock_quantity}</span>
                                                 </div>
                                                 <CountdownTimer productId={productId} />
                                                 <div className="colors">
                                                     <p>Colore</p>
                                                     <div className="variant">
                                                         <form action="">
                                                         <p><input type="radio" name="color" id="cogrey"/><label htmlFor="cogrey" className="circle"></label></p>
                                                         <p><input type="radio" name="color" id="coblue"/><label htmlFor="coblue" className="circle"></label></p>
                                                         <p><input type="radio" name="color" id="cogreen"/><label htmlFor="cogreen" className="circle"></label></p>
                                                         </form>
                                                     </div>
                                                 </div>
                                                 <div className="sizes">
                                                     <p>Size</p>
                                                     <div className="variant">
                                                         <form action="">
                                                         <p><input type="radio" name="size" id="size-40"/><label htmlFor="size-40" className="circle"><span>40</span></label></p>
                                                         <p><input type="radio" name="size" id="size-41"/><label htmlFor="size-41" className="circle"><span>41</span></label></p>
                                                         <p> <input type="radio" name="size" id="size-42"/><label htmlFor="size-42" className="circle"><span>42</span></label></p>
                                                         <p><input type="radio" name="size" id="size-43"/><label htmlFor="size-43" className="circle"><span>43</span></label></p>
                                                         </form>
                                                     </div>
                                                 </div>
                                                 <div className="actions">
                                                     <div className="qty-control flexitem">
                                                     <button className="minus circle" onClick={handleDecrement}>-</button>
                                                         <input type="text" value={quantity} onChange={handleInputChange}/>
                                                         <button className="plus circle" onClick={handleIncrement}>+</button>
                                                     </div>
                                                     <div className="bitton-cart"><button className="primary-button">Add to cart</button></div>
                                                     <div className="wish-share">
                                                         <ul className="flexitem second-links">
                                                             <li><a href="#">
                                                                 <span className="icon-large"><i className="ri-heart-line"></i></span>
                                                                 <span>Wishlist</span>
                                                             </a></li> 
                                                             <li><a href="#">
                                                                 <span className="icon-large"><i className="ri-share-line"></i></span>
                                                                 <span>Share</span>
                                                             </a></li>
 
                                                         </ul>
                                                     </div>
                                                 </div>
                                                 <div className="description collapse">
                                                     <ul>
                                                         <Information product={product} />
                                                         <Details product={product} />
                                                         <Custom />
                                                         <Review 
                                                             comments={comments} 
                                                             commentsCount={commentsCount} 
                                                             newComment={newComment} 
                                                             setNewComment={setNewComment} 
                                                             rating={rating} 
                                                             setRating={setRating} 
                                                             handleCommentSubmit={handleCommentSubmit} 
                                                         />
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

            <FeaturesSection />    

            <Banners />

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
                                <a href="#0">
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

export default Offer;