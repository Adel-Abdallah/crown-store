import React from 'react';

import collectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((items, idx) => idx < 4).map((id, ...otherItemProps) => (
                        <div key={item.id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;