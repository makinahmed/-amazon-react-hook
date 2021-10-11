import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <div>
               <h1>Register: Create Account</h1>
               <form onSubmit="">
                   <label htmlFor="">Enter Your Email:</label>
                   <br />
                  <input placeholder="Your Email" type="email" />
                  <br />
                  <br />
                   <label htmlFor="">Enter Your Password:</label>
                   <br />
                  <input placeholder="Your Password" type="password" />
                  <br />
                  <br />
                   <label htmlFor="">Re-Enter Your Password:</label>
                   <br />
                   <br />
               
                  <input placeholder="Re-Enter Your Password" type="password" />
                  <br />
                  <br />
                  <input type="submit" className="btn" name="" id="" />
                
                 
               </form>
               <p>Already have an Account? <Link to="/login">Login</Link></p>
           </div>
           <div>------------or---------------</div>
                <button className="btn">Google Sign In</button>
        </div>
    );
};

export default Register;