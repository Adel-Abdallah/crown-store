import React from 'react';

import collection
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx) => idx < 4).map((item,...otherItemProps) => (
                        <div key={item.id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;