import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/products" element={<ProductList />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
