import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const searchProducts = async (searchQuery) => {
    const response = await axios.post('http://localhost:5001/api/search', { searchQuery });
    return response.data;
  };
  
  export const fetchTotalProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.length;
  };