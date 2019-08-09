import React from 'react';

import './index.styles.scss';
import CollectionItem from '../collection-item';

const CollectionPreview = (props) => {
  const { title, items } = props;

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
