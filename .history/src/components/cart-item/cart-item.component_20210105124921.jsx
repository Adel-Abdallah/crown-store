import React from 'react';

import './cart-item.styles.sccs'

const CartItem =({item:{imageUrl,price,name}})=> (
    <div className='cart-item'>
        <img src={image}/>
    </div>
)
  

 
export default CartItem;