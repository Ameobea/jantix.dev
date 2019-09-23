import React from 'react';

import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
