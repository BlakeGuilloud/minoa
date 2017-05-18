import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as UIActions from '../actions/UIActions';

class Navigation extends Component {
  fetchClassNames = (id) => {
    return cx('navigation__options-item', {
      'nav-active': this.props.pathname === id,
    });
  }

  renderUserNav = () =>
    <div className="navigation__options">
      <Link onClick={() => this.props.changePath('home')} to="/" className={this.fetchClassNames('home')}>Home</Link>
      <Link onClick={() => this.props.changePath('profile')} to="/profile" className={this.fetchClassNames('profile')}>Profile</Link>
      <Link onClick={() => this.props.changePath('logout')} to="/logout" className={this.fetchClassNames('logout')}>Logout</Link>
    </div>;

  renderDefaultNav = () =>
    <div className="navigation__options">
      <Link onClick={() => this.props.changePath('home')} to="/" className={this.fetchClassNames('home')}>Home</Link>
      <Link onClick={() => this.props.changePath('login')} to="/login" className={this.fetchClassNames('login')}>Login</Link>
      <Link onClick={() => this.props.changePath('register')} to="/register" className={this.fetchClassNames('register')}>Register</Link>
    </div>;

  render() {
    return (
      <div className="navigation">
        <div className="navigation__logo">
          minoa
        </div>
        {this.props.currentUser._id ? this.renderUserNav() : this.renderDefaultNav()}
      </div>
    );
  }
}

Navigation.PropTypes = {
  currentUser: PropTypes.object.isRequired,
  changePath: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { auth, ui } = state;

  return {
    currentUser: auth.currentUser,
    pathname: ui.pathname,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePath: bindActionCreators(UIActions.changePath, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
