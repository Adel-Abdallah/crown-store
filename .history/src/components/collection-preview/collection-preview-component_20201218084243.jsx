import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({title}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCas</h1>
            <div className='preview'>

            </div>
        </div>
    );
}

export default CollectionPreview;