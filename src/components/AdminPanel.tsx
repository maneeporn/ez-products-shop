import React from 'react';

const AdminPanel: React.FC = () => {
    return (
        <div>
            <h3>Admin Panel</h3>
            <p>Manage your products here.</p>
            <div>
                <button>Add Product</button>
                <button>Delete Product</button>
            </div>
        </div>
    );
};

export default AdminPanel;
