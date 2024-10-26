import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import AdminPanel from './AdminPanel';

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

const ProductList: React.FC = () => {
    const { user, logout } = useAuth();
    const [products, setProducts] = React.useState<Product[]>([]);

    useEffect(() => {
        if (!user) {
            logout();
        }
        else {
            fetch('https://fakestoreapi.com/products?limit=5')
                .then((res) => res.json())
                .then((data) => setProducts(data));
        }
    }, [user, logout]);

    return (
        <div>
            <h2>Product List</h2>
            <p>Welcome, {user}</p>
            {user === 'admin' && <AdminPanel />}

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} height={20} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default ProductList;
