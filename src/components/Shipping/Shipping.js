import React from 'react';
import { useForm } from 'react-hook-form';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import useAuth from '../Hoocks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const {user} = useAuth()
    console.log(user);
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    const onSubmit = data =>{
        const savedCart = getStoredCart();
        data.order = savedCart;
         fetch(`http://localhost:5000/orders`,{
             method: "POST",
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(result =>{
             if(result.insertedId) {
                alert("Done ha ha ha !!")
                clearTheCart()
                reset();
             }
         })

        
        }
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input   placeholder="name" defaultValue={user.displayName} {...register("name")} />
                <input placeholder="email" defaultValue={user.email}  {...register("email", { required: true })} />
                {errors.email &&
                    <span className="error"><small>This field is required</small></span>} 
           
                <input placeholder="address" defaultValue="" {...register("address")} />
                <input  placeholder="city" defaultValue="" {...register("city")} />
                <input  placeholder="phone" defaultValue="" {...register("Phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;