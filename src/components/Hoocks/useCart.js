// import { useEffect, useState } from "react"
// import { getStoredCart } from "../../utilities/fakedb"

import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"


// const useCart = products => {
//     const [cart, setCart] = useState([])

//     useEffect(() => {
//         let savedData = getStoredCart()

//         if (products.length) {
//             let newCart = []
//             for (const data in savedData) {
//                 let localStorageProduct = products.find(product => product.key === data)
//                 if (localStorageProduct) {
//                     localStorageProduct.quantity = savedData[data];
//                     newCart.push(localStorageProduct)
//                 }
//             }
//             setCart(newCart)
//         }
//     }, [products])

//     return [cart, setCart]
// }


// export default useCart;


const useCart = products => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];

        for (const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);
            if (addedProduct) {
                const quantity = savedCart[key]
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct)
            } setCart(storedCart)
        }
    }, [products])
    return [cart,setCart]
}

export default useCart;