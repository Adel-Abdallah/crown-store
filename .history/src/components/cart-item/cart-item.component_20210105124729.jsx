import React from 'react';

import './cart-item.styles.sccs'

const CartItem =({item:{imageUrl,price,name}})=> {
    return ( 
        <div> className='cart-item'>
            <img src={imgeUrl} alt='item/>
            </div>
        
     );
}
 
export default CartItem;