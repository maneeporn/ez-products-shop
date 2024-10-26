import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = 'admin' | 'guest' | null;

interface AuthContextType {
    user: User;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(null);
    const navigate = useNavigate();

    const login = (username: string) => {
        if (username === 'admin') setUser('admin');
        else setUser('guest');
    };

    const logout = () => {
        // window.location.href = '/';
        navigate('/', { replace: true });
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
