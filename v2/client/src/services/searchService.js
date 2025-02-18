import axios from 'axios';
import API_BASE from "../api";

export const searchProducts = async (searchQuery) => {
    const response = await axios.post('http://localhost:5001/api/search', { searchQuery });
    return response.data;
  };
  
  export const fetchTotalProducts = async () => {
    const response = await axios.get(`${API_BASE}/products`);
    return response.data.length;
  };