import React, { Component } from 'react';
import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__main">
          minoa
        </div>
        <div className="header__sub">
          Let's build something.
        </div>
      </div>
    );
  }
}

export default Header;
