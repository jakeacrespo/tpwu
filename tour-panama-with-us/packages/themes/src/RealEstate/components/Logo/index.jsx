import React from 'react';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

const Logo = props => (
  <div className="logoWrapper">
    <img src={logo} alt="Tour Panama With Us" className="logo"/>
    <img src={logo2} alt="Tour Panama With Us" className="logo-scroll"/>
  </div>
);

export default Logo;
