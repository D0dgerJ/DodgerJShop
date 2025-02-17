import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Fetch all products
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

// Fetch product images (optionally filtered by productId)
export const fetchProductImages = async (productId = null) => {
  const url = `${API_BASE_URL}/product_images${productId ? `?product_id=${productId}` : ''}`;
  const response = await axios.get(url);
  return response.data;
};

// Fetch discounts
export const fetchDiscounts = async () => {
  const response = await axios.get(`${API_BASE_URL}/discounts`);
  return response.data;
};

// Fetch comments for a product
export const fetchComments = async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/api/comments/${productId}`);
  return response.data;
};

// Add a new comment for a product
export const addComment = async ({ productId, customerId, commentText, rating }) => {
  const response = await axios.post(`${API_BASE_URL}/api/comments`, {
    product_id: productId,
    customer_id: customerId,
    comment_text: commentText,
    rating,
  });
  return response.data;
};