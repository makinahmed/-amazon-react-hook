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
                        <Link><a href="/shop">Shop</a></Link>
                        <Link><a href="/order">Order Review</a></Link>
                        <Link> <a href="/manage">Manage Inventory</a></Link>
                       {user.email && <span style={{color: 'white'}}>Hello, {user.displayName} </span>}
                        {
                            user.email ?
                                <Link to="/login"> <button onClick={logOut}>Log Out</button></Link> : <Link> <a
                                    
                                    href="/login">Login</a></Link>


                        }
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Header;

// public/amazon-logo.jpg