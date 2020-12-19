import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id,name,price,}) => {
    return ( 
        <div className='collection-item'>
            <div className='image'></div>
        </div>
     );
}
 
export default CollectionItem;