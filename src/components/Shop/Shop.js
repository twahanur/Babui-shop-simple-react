import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import shopCss from './Shop.css'

const Shop = () => {
    const fake10 = fakeData.slice(0,10);
    const [products, setProducts]= useState(fake10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
    const newCart = [...cart, product] ;
    setCart(newCart)
}

    return (
        <div className="shop-container">
            <div className="product-container">
            
                {
                products.map(data => <Product handleAddProduct = {handleAddProduct} product={data}> </Product>)
                }

            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;