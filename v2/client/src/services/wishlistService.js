/* import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; */

export const fetchWishlist = async () => {
    const response = await fetch('/api/wishlist', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  };
  
  export const addToWishlistAPI = async (productId) => {
    const response = await fetch('/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ product_id: productId }),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to add to wishlist');
    }
  
    return response.json();
  };
  
  export const removeFromWishlistAPI = async (productId) => {
    const response = await fetch(`/api/wishlist/${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to remove from wishlist');
    }
  
    return true;
  };