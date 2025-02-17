import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const checkAuth = async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/auth-check`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.isAuthenticated;
    } catch (error) {
      console.error('Error checking auth', error);
      return false;
    }
  };