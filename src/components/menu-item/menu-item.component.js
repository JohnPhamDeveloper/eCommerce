import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
  return (
    <div className={`menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={`background-image ${size}}`}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
