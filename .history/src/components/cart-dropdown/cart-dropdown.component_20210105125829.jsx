import React from 'react';
import { connect } from 'react-redux';

import CustomButton from './../custom-button/custom-button.component';

import './cart-dropdown.styles.scss'
const CartDropdown = ({}) => {
    return (<div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>);
}
const mapStateToProps = ({cart:{cartItems}})=>{
    cartItems
}

export default connect(mapStateToProps,null)(CartDropdown);