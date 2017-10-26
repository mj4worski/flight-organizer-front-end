import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBestPlaces } from '../actions';
import { selectBestPlaces } from '../reducers';
import PlaceTile from '../components/PlaceTile';
import './BestPlaces.scss';

class BestPlaces extends Component {
    /* eslint-disable no-shadow */
  componentDidMount() {
    const {
        bestPlaces,
        fetchBestPlaces,
    } = this.props;
    if (bestPlaces.length === 0) {
      fetchBestPlaces();
    }
  }

  render() {
    const { bestPlaces = [] } = this.props;
    return (
      <div>
        <section className="best-place">
          {
                  bestPlaces.length === 0 ?
                    <div className="best-place__spinner" />
                    : bestPlaces.map(place => <PlaceTile key={place.id} {...place} />)
          }
        </section>
      </div>
    );
  }
}

BestPlaces.propTypes = {
  bestPlaces: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
      }),
  ),
  fetchBestPlaces: PropTypes.func.isRequired,
};

BestPlaces.defaultProps = {
  bestPlaces: [],
};

const mapStateToProps = state => ({
  bestPlaces: selectBestPlaces(state),
});

const mapDispatchToProps = {
  fetchBestPlaces,
};

export default connect(mapStateToProps, mapDispatchToProps)(BestPlaces);
export { BestPlaces };
