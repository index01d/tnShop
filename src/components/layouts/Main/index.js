import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { mainPath, aboutPath } from 'helpers/routes';

import './index.css';

export default ({ children }) => (
  <div className='container'>
    <div className='header'>
      <span className='header__brand'><Link to={mainPath()}>TN Smart Devices</Link></span>
      <nav className='header__menu'>
        <ul>
          <li><NavLink strict exact to={mainPath()}>Home</NavLink></li>
          <li><NavLink strict exact to={aboutPath()}>About</NavLink></li>
        </ul> 
      </nav>
    </div>
    <div className='content'>{children}</div>
    <div className='footer'></div>
  </div>
);