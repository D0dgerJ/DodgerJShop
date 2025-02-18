import API_BASE from '../api';

export const fetchWishlist = async () => {
  const token = localStorage.getItem('token');

  // 🔹 Если токена нет, сразу возвращаем пустой список
  if (!token) {
      return [];
  }

  const response = await fetch(`${API_BASE}/api/wishlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Ошибка при загрузке списка желаемого');
  }

  return response.json();
};
  
export const addToWishlistAPI = async (productId) => {
    const response = await fetch(`${API_BASE}/api/wishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ product_id: productId }),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Не удалось добавить в список желаемого');
    }
  
    return response.json();
};
  
export const removeFromWishlistAPI = async (productId) => {
    const response = await fetch(`${API_BASE}/api/wishlist/${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Не удалось удалить из списка желаемого');
    }
  
    return true;
};
