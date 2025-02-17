import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useMenuVisibility = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuVisible(location.pathname === '/'); // Меню отображается только на главной
  }, [location]);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  return { isMenuVisible, toggleMenu };
};

export default useMenuVisibility;