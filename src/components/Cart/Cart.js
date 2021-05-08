import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) =>  total + prd.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }
    let shippingCost = 0
    if (totalPrice > 500) {
        shippingCost = 0;
    }
    else if (totalPrice > 300 ) {
        shippingCost = 20;
    }
    else if (totalPrice > 200 ){
        shippingCost = 30;
    }
    else if (totalPrice > 0 ){
        shippingCost = 40;
    }
    
    const tax = totalPrice / 10
    const grandTotal = totalPrice + shippingCost + (tax)

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length} </p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: ${formatNumber(shippingCost)}</small></p>
            <p><small>Tax : {formatNumber(tax)}</small></p>
            <h5>Total price: ${formatNumber(grandTotal)}</h5>
        </div>
    );
};

export default Cart;