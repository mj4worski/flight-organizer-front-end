/* eslint-disable no-undef */
// @flow
import React from 'react';
import type { findFlightsType } from '../../actions';

type Props = {
    onClick: findFlightsType
}

type State = {
    from: string,
    to: string,
}

class From extends React.Component<void, Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {
      from: '',
      to: '',
    };
  }
  state: State;

  handleSubmit = (e: Event) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state.from, this.state.to);
  };

  handleChangeFrom = (event : Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ from: event.target.value });
    }
  };

  handleChangeTo = (event : Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ to: event.target.value });
    }
  };

  render() {
    return (<div>
      <p>Znajdz swoj wymarzony lot</p>
      <form onSubmit={this.handleSubmit}>
        <p>Skad: <input type="text" onChange={this.handleChangeFrom} /></p>
        <p>Dokad : <input type="text" onChange={this.handleChangeTo} /></p>
        <button>Szukaj</button>
      </form>
    </div>);
  }
}
export default From;

