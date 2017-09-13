import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tryLogin } from '../actions';

class LoginForm extends Component {
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
    onClick(this.state.login, this.state.password);
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

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default connect(
    null,
    { onClick: tryLogin },
)(LoginForm);
