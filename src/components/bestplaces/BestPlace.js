// @flow

import React, { Component } from 'react';
import './BestPlace.scss';

class BestPlace extends Component {
  render() {
    return (
      <section className="best-place">
        <div className="place" onClick={this}>
          <h2 className="place__name">Magnaaa</h2><p className="place__description">Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                            veroeros et feugiat.</p>
        </div>
        <div className="place" onClick={this}>
          <h2 className="place__name">Magnaaa</h2>
          <p className="place__description">Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                            veroeros et feugiat.</p>
        </div>
        <div className="place" onClick={this}>
          <h2 className="place__name">Magnaaa</h2>
          <p className="place__description">Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                            veroeros et feugiat.</p>
        </div>

        <div className="place" onClick={this}>
          <h2 className="place__name">Magnaaa</h2>
          <p className="place__description">Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                            veroeros et feugiat.</p>
        </div>
      </section>
    );
  }
}

export default BestPlace;
