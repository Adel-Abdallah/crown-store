import React from 'react';

import './cart-item.styles.sccs'

const CartItem = ({imgeUrl,price,name}) => {
    return ( 
        <div className='cart-item'>
            <img src={imgeUrl}/>
        </div>
     );
}
 
export default CartItem;