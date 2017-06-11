/* eslint-disable no-undef */
// @ flow
import React from 'react';
import { connect } from 'react-redux';
import type {} from '../actions';
import { tryLogin } from '../actions/index';

type Props = {
    onClick: tryLogin
}

type State = {
    login: string,
    password: string,
}

class LoginForm extends React.Component<void, Props, State> {
  constructor(props: Props) {
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

  handleChangeLogin= (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ login: event.target.value });
    }
  };

  handleChangePassword = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ password: event.target.value });
    }
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
