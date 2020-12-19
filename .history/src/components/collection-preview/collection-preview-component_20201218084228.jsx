import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({title}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.upper</h1>
            <div className='preview'>

            </div>
        </div>
    );
}

export default CollectionPreview;