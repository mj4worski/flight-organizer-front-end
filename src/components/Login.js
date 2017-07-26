import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tryLogin } from '../actions/index';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }


  handleSubmit = (e: Event) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state.login, this.state.password);
  };

  handleChangeLogin= (event: Event & {currentTarget: HTMLInputElement}) => {
    this.setState({ login: event.currentTarget.value });
  };

  handleChangePassword = (event: Event & {currentTarget: HTMLInputElement}) => {
    this.setState({ password: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <p> Podaj login i aktualne hasło</p>
        <form onSubmit={this.handleSubmit}>
          <p>Login: <input type="text" onChange={this.handleChangeLogin} /></p>
          <p>Hasło : <input type="password" onChange={this.handleChangePassword} /></p>
          <button>Zaloguj</button>
        </form>
      </div>
    );
  }
}

export default connect(
    null,
    { onClick: tryLogin },
)(LoginForm);
