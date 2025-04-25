import axios from 'axios';
import API_BASE from "../api";


export const checkAuth = async (token) => {
    try {
      const response = await axios.get(`${API_BASE}/auth-check`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.isAuthenticated;
    } catch (error) {
      console.error('Error checking auth', error);
      return false;
    }
  };