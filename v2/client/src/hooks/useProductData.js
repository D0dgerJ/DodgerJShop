import { useState, useEffect } from 'react';
import {
  fetchProducts,
  fetchProductImages,
  fetchDiscounts,
} from '../services/productService';

const useProductData = (productId = null) => {
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [discountPercentages, setDiscountPercentages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [productsData, productImagesData, discountsData] = await Promise.all([
          fetchProducts(),
          fetchProductImages(productId),
          fetchDiscounts(),
        ]);

        setProducts(productsData);
        setProductImages(productImagesData);
        setDiscounts(discountsData);

        // Формируем проценты скидок
        const discountPercentagesMap = discountsData.reduce((acc, discount) => {
          acc[discount.discount_id] = discount.discount_percentage;
          return acc;
        }, {});
        setDiscountPercentages(discountPercentagesMap);
      } catch (err) {
        console.error('Error fetching product data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return { products, productImages, discounts, discountPercentages, loading, error };
};

export default useProductData;
