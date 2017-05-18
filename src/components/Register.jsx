import React, { Component } from 'react';

class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    const newState = { [name]: value };

    this.setState(newState);
  }

  handleSubmit = () => {
    console.log('this state : ', this.state);
  }

  render() {
    return (
      <div className="register">
        <label htmlFor="email">
          Email
        </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="email"
          className="input"
        />
        <label htmlFor="username">
          Username
        </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="username"
          className="input"
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          className="input"
        />
        <a onClick={this.handleSubmit} href="javascript:void(0)" className="button">
          Register
        </a>
      </div>
    );
  }
}

export default Register;
