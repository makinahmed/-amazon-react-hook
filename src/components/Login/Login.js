import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hoocks/useAuth';
import './Login.css'
const Login = () => {
    const { user, setUser, setError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleLoginbtn = () => {
        signInWithGoogle()
            .then(res => {
                const user = res.user;
                setUser(user);
                history.push(redirect_uri);
            })
            .catch(error => {
                const errorMsg = error.message;
                setError(errorMsg)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h1>Login</h1>
                <form onSubmit="">
                    <label htmlFor="">Enter Your Email:</label>
                    <br />
                    <input placeholder="Your Email" type="email" />
                    <br />
                    <label htmlFor="">Enter Your Password:</label>
                    <br />
                    <input type="password" placeholder="Your Password" name="" id="" />
                    <br />
                    <button className="btn" type="submit">Login</button>
                </form>
                <p>New to amazon? <Link to="/register">Create an Account</Link></p>
                <div>-----or-----</div>
                <button
                    onClick={handleLoginbtn}
                    className="btn"
                >Google Sign In</button>

            </div>
        </div>
    );
};

export default Login;