import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []); // Загрузка продуктов при монтировании компонента

    const loadProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };

    return (
        <div>
          <h2>Список продуктов</h2>
          {products.map((product) => (
            <div key={product.product_id}>
              <Link to={`/products/${product.product_id}`}>
                <img src={product.image_url} alt={product.name} />
                <strong>{product.name}</strong> - ${product.price}
              </Link>
              <hr />
            </div>
          ))}
        </div>
      );
};

export default ProductList;