import React from 'react';

import './cart-item.styles.sccs'

const CartItem =({item:{imageUrl,price,name}})=> (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
         <span className='name'>{name}</span>
         <span className='price'>${price}</span>
         
        </div>
    </div>
)
  

 
export default CartItem;