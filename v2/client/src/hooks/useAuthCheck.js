import { useState, useEffect } from 'react';
import { checkAuth } from '../services/authService';

export const useAuthCheck = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsModalOpen(true);
        return;
      }

      const isAuthenticated = await checkAuth(token);
      setIsModalOpen(!isAuthenticated);
    };

    checkAuthentication();
  }, []);

  return { isModalOpen, setIsModalOpen };
};
