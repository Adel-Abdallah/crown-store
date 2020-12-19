import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id,name,price,imageUrl}) => {
    return ( 
        <div className='collection-item'>
            <div className='image'
            style={{
                backgroundImage
            }}></div>
        </div>
     );
}
 
export default CollectionItem;