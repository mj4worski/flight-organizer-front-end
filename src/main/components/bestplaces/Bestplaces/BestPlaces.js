import React, { Component } from 'react';
import Place from '../PlaceTile';
import { getBestPlaces } from '../../../api';
import './BestPlaces.scss';

class BestPlaces extends Component {
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

export default BestPlaces;
