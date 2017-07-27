import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FindFlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
    };
  }

  handleSubmit = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state.from, this.state.to);
  };

  handleChangeFrom = (event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ from: event.target.value });
    }
  };

  handleChangeTo = (event) => {
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

FindFlightForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FindFlightForm;

