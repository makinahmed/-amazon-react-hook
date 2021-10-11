import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hoocks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const {user} = useAuth()
    console.log(user);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
         console.log(data);
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