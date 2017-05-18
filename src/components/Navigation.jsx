import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  componentDidMount() {
    this.setClasses();
  }

  componentDidUpdate() {
    this.setClasses();
  }

  setClasses = () => {
    document.getElementById('nav-home').classList.remove('nav-active');
    document.getElementById('nav-login').classList.remove('nav-active');
    document.getElementById('nav-register').classList.remove('nav-active');

    switch (location.pathname) {
      case '/':
        document.getElementById('nav-home').classList.add('nav-active');
        break;
      case '/register':
        document.getElementById('nav-register').classList.add('nav-active');
        break;
      case '/login':
        document.getElementById('nav-login').classList.add('nav-active');
        break;
      default:
        document.getElementById('nav-home').classList.add('nav-active');
        break;
    }
  }

  render() {
    return (
      <div className="navigation">
        <div className="navigation__logo">
          minoa
        </div>
        <div className="navigation__options">
          <Link to="/" id="nav-home" className="navigation__options-item">Home</Link>
          <Link to="/login" id="nav-login" className="navigation__options-item">Login</Link>
          <Link to="/register" id="nav-register" className="navigation__options-item">Register</Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
