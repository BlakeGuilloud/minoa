import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AuthActions from '../actions/AuthActions';
import * as UIActions from '../actions/UIActions';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    const newState = { [name]: value };

    this.setState(newState);
  }

  handleSubmit = async () => {
    await this.props.login(this.state);

    this.props.history.push('/');

    this.props.changePath('home');
  }

  render() {
    return (
      <div className="register">
        <label htmlFor="email">
          Username / Email
        </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="username"
          className="input"
        />
        <label htmlFor="email">
          Password
        </label>
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          className="input"
        />
        <a onClick={this.handleSubmit} href="javascript:void(0)" className="button">
          Login
        </a>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    changePath: bindActionCreators(UIActions.changePath, dispatch),
    login: bindActionCreators(AuthActions.login, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Login);
