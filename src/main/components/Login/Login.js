import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from './actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick({
      login: this.state.login,
      password: this.state.password,
    });
  };

  handleChangeLogin= (event) => {
    this.setState({ login: event.currentTarget.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <p>Sing in to Flight Organizer</p>
        <form onSubmit={this.handleSubmit}>
          <p>Username: <input type="text" onChange={this.handleChangeLogin} /></p>
          <p>Password : <input type="password" onChange={this.handleChangePassword} /></p>
          <button>Sing in</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default connect(null, { onClick: logIn })(Login);
