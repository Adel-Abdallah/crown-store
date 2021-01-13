import React from 'react';
import {connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <spn className="name">{name}</spn>
        <spn className="quantity">{quantity}</spn>
        <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>
    </div>
);
const mapDispatchToProps = dispatch =>({
 clearItem:
})


export default connect()(CheckoutItem);