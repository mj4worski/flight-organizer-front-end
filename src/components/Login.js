// @flow
import React from 'react';
import { connect } from 'react-redux';
import type {} from '../actions';
import { tryLogin } from '../actions/index';

import type { tryLoginType } from '../actions/actions';

type Props = {
    onClick: tryLoginType
}

type DefaultProps = any;
type State = {
    login: string,
    password: string,
}

class LoginForm extends React.Component<DefaultProps, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }
  state: State;


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
