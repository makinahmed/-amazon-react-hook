import React, { useEffect, useState } from 'react';
import useAuth from '../Hoocks/useAuth';

const Orders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            },
        }
        )
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div>
            <h2>Only  {orders.length} Orders</h2>
            <p>All Users Email List: </p>
            {
                orders.map(order => <li key={order._id}>{order.email}</li>)
            }
            
        </div>
    );
};

export default Orders;