import React, { Component } from 'react';
import Place from './Place';
import { getBestPlaces } from '../../api';
import './BestPlace.scss';

class BestPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    getBestPlaces().then(places => this.setState({ places }));
  }

  render() {
    const spinnerShow = this.state.places.length === 0;
    const { places } = this.state;
    return (
      <div>
        <section className="best-place">
          {
              spinnerShow ?
                <div className="best-place__spinner" /> :
                  places.map(place =>
                    (<Place
                      key={place.id}
                      {...place}
                    />))
        }
        </section>
      </div>
    );
  }
}

export default BestPlace;