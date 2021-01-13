import React from 'react';
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <spn className="name">{name}</spn>
        <spn className="quantity">{quantity}</spn>
        <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>
    </div>
)};
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);