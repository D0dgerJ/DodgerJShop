import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('/api/auth-check', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.status === 200 && response.data.isAuthenticated) {
                    setIsAuthenticated(true);
                    setUser(response.data.user);
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            } catch (error) {
                console.error('Ошибка проверки аутентификации', error);
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, user, setIsAuthenticated, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};