import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const cart = props.cart;
    const course = cart.map(courseName => <p className= "course-cart-summary">{courseName.title} - ${courseName.price}</p>);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }
    return (
        <div>
            <div className = "order-summary">
                <h5>You bought: {props.cart.length}</h5>
                <h5>Your order list: {course}</h5>
                <h4>Total price: ${total}</h4>
                <button className= "btn btn-primary btn-lg btn-block">Proced to payment</button>
            </div>
        </div>
    );
};

export default Cart;