import React from 'react';

import './cart-item.styles.sccs'

const CartItem =({item:{imageUrl,price,name}})=> (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
         <spn></spn>
        </div>
    </div>
)
  

 
export default CartItem;