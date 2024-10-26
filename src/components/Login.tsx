import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(username);
        navigate('/products');
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Enter 'admin' or 'guest'"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
