import React, { useState } from 'react';
import axios from 'axios';
import API_BASE from "../api";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleAddProduct = async () => {
        try {
            await axios.post(`${API_BASE}/products`, {
                name,
                price,
                description,
            });

            // Обновление списка продуктов после добавления
            // (здесь вы можете использовать Redux или Context API для управления состоянием)
            // Например, передавая callback из родительского компонента.
            
        } catch (error) {
            console.error('Error adding product', error);
        }
    };

    return (
        <div>
            <h2>Добавить продукт</h2>
            <label htmlFor="name">Название продукта:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="price">Цена:</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />

            <label htmlFor="description">Описание:</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button onClick={handleAddProduct}>Добавить продукт</button>
        </div>
    );
};

export default AddProduct;
