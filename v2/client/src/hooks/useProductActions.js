import { useState, useEffect } from 'react';
import { searchProducts, fetchTotalProducts } from '../services/searchService';

const useProductActions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  // Поиск продуктов
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await searchProducts(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  // Загрузка общего числа продуктов
  useEffect(() => {
    const loadTotalProducts = async () => {
      try {
        const total = await fetchTotalProducts();
        setTotalProducts(total);
      } catch (error) {
        console.error('Error fetching total products:', error);
      }
    };

    loadTotalProducts();
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    handleSearch,
    totalProducts,
  };
};

export default useProductActions;
