import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-bottom" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
