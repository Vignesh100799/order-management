
import React from 'react';
import Sidebar from './Sidebar';
import TobBar from './TobBar';

const Layout = ({ children }) => (
  <div id="page-top">
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TobBar />
          <div className="container-fluid">
              
          {children}
        </div>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
