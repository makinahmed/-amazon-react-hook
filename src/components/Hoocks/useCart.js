import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"

const useCart = () => {
    // console.log(products.products, ' i am products');
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getStoredCart();
        const keys= Object.keys(savedCart)
        fetch('http://localhost:5000/products/byKeys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products=>{
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key]
                    // console.log(typeof quantity)
                    addedProduct.quantity = quantity;
                    console.log( addedProduct);
                    storedCart.push(addedProduct)
                } setCart(storedCart)
            }
        })
        // console.log(savedCart);
        
    }, [])
    return [cart, setCart]
}

export default useCart;