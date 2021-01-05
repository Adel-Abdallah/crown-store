import React from 'react';

import './cart-item.styles.sccs'

const CartItem =({item:{imageUrl}})=> {
    return ( 
        <> className='cart-item'>
            <img src={imgeUrl} alt='item/>
            </>
        
     );
}
 
export default CartItem;