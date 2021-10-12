import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import useAuth from '../Hoocks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navigation">
                <nav>
                    <ul className="list">
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order Review</a></li>
                        <li><a href="/manage">Manage Inventory</a></li>
                        {user.email && <span style={{ color: 'white' }}>Hello, {user.displayName} </span>}
                        {
                            user.email ?
                                <a href="/login"> <button onClick={logOut}>Log Out</button></a> : <a

                                    href="/login">Login</a>


                        }
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Header;

// public/amazon-logo.jpg