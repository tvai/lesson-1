import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.styles.scss';

const MenuItem = (props) => {
  const { title, imageUrl, size, linkUrl, history, match } = props;

  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`menu-item ${size}`}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
