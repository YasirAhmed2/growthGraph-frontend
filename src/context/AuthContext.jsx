import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    // Set axios base URL or headers based on token
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchCurrentUser(token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            setUser(null);
            setLoading(false);
        }
    }, [token]);

    const fetchCurrentUser = async (authToken) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/auth/me`, {
                headers: { Authorization: `Bearer ${authToken}` }
            });
            setUser(response.data);
        } catch (error) {
            console.error('Failed to load user profile with token:', error);
            logout();
        } finally {
            setLoading(false);
        }
    };

    // Signup user
    const signup = async (name, email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, { name, email, password });
            const { token: receivedToken, user: receivedUser } = response.data;
            
            localStorage.setItem('token', receivedToken);
            setToken(receivedToken);
            setUser(receivedUser);
            return { success: true };
        } catch (error) {
            const errorMsg = error.response?.data?.error || 'Signup failed. Please try again.';
            return { success: false, error: errorMsg };
        }
    };

    // Login user
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
            const { token: receivedToken, user: receivedUser } = response.data;
            
            localStorage.setItem('token', receivedToken);
            setToken(receivedToken);
            setUser(receivedUser);
            return { success: true };
        } catch (error) {
            const errorMsg = error.response?.data?.error || 'Invalid email or password.';
            return { success: false, error: errorMsg };
        }
    };

    // Logout user
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated: !!user,
                signup,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
