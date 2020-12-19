import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id,name,price,imge}) => {
    return ( 
        <div className='collection-item'>
            <div className='image'></div>
        </div>
     );
}
 
export default CollectionItem;