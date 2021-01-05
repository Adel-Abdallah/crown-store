import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from './../custom-button/custom-button.component';

import './cart-dropdown.styles.scss'
const CartDropdown = ({ cartItems }) => {
    return (<div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(cartItem => <CartItem)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>);
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps, null)(CartDropdown);