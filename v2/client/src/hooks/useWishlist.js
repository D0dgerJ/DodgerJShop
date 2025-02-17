import { useState, useEffect, useCallback } from 'react';
import {
  fetchWishlist,
  addToWishlistAPI,
  removeFromWishlistAPI,
} from '../services/wishlistService';

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const data = await fetchWishlist();
        setWishlist(data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, []);

  const addToWishlist = useCallback(async (productId) => {
    try {
      const newItem = await addToWishlistAPI(productId);
      setWishlist((prev) => [...prev, newItem]);
      alert('Product added to wishlist!');
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
      alert(error.message);
    }
  }, []);

  const removeFromWishlist = useCallback(async (productId) => {
    try {
      await removeFromWishlistAPI(productId);
      setWishlist((prev) => prev.filter((item) => item.product_id !== productId));
      alert('Product removed from wishlist!');
    } catch (error) {
      console.error('Error removing product from wishlist:', error);
      alert(error.message);
    }
  }, []);

  const isInWishlist = useCallback(
    (productId) => wishlist.some((item) => item.product_id === productId),
    [wishlist]
  );

  return { wishlist, loading, addToWishlist, removeFromWishlist, isInWishlist };
};

export default useWishlist;
