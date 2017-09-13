import React from 'react';
import { shallow, mount } from 'enzyme';
import BestPlace from '../../../main/components/bestplaces/Bestplaces/BestPlaces';

const mockPlaceData = [{ id: 1, name: 'Place 1', image: 'Image 1' }, { id: 2, name: 'Place 2', image: 'Image 2' }];

jest.mock('../../../main/api', () => {
  const module = jest.genMockFromModule('../../../main/api');
  module.getBestPlaces = () => Promise.resolve(mockPlaceData);
  return module;
});


describe('<BestPlaces />', () => {
  it('should render <section /> with className .best-place', () => {
    const wrapper = shallow(<BestPlace />);
    expect(wrapper.find('section').hasClass('best-place')).toBe(true);
  });

  it('should render <div /> with className .best-place__spinner', () => {
    const wrapper = shallow(<BestPlace />);
    expect(wrapper.find('div.best-place__spinner')).toHaveLength(1);
  });

  it('should render <BestPlaces /> with empty list of places', () => {
    const wrapper = shallow(<BestPlace />);
    expect(wrapper.state('places')).toEqual(expect.arrayContaining([]));
  });

  it('should calls componentDidMount after render <BestPlaces />', () => {
    const spy = jest.spyOn(BestPlace.prototype, 'componentDidMount');
    mount(<BestPlace />);
    expect(spy).toHaveBeenCalled();
  });

  // Issues:: Regarding to React Router 4 and Enzyme
  // https://stackoverflow.com/questions/45010814/react-test-with-enzyme-cannot-read-property-route-of-undefined
  it('should set in state  places fetched from service on componentDidMount', () => {
    const promise = Promise.resolve();
    const wrapper = mount(<BestPlace />);
    return promise.then(() => {
      expect(wrapper.state('places')).toEqual(expect.arrayContaining(mockPlaceData));
    });
  });
});
