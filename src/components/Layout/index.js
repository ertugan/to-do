import React from 'react';
import classnames from 'classnames/bind';

import './style.scss';

const Layout = ({ children, className, ...rest }) => {
  return (
    <div className={classnames('layout', className)} {...rest}>
      {children}
    </div>
  );
};

export default Layout;
