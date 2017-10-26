import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { BestPlaces } from '../../../main/components/bestplaces/components/BestPlaces';

const mockPlaceData = [{ id: 1, name: 'PlaceTile 1', image: 'Image 1' }, { id: 2, name: 'PlaceTile 2', image: 'Image 2' }];

jest.mock('../../../main/api', () => {
  const module = jest.genMockFromModule('../../../main/api');
  module.getBestPlaces = () => Promise.resolve(mockPlaceData);
  return module;
});

const fetchBestPlacesMock = jest.fn();

describe('<BestPlaces />', () => {
  it('should render <BestPlaces /> without PlaceTitle components', () => {
    const component = renderer.create(<BestPlaces fetchBestPlaces={fetchBestPlacesMock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should calls fetchBestPlaces after render', () => {
    shallow(<BestPlaces fetchBestPlaces={fetchBestPlacesMock} />);
    expect(fetchBestPlacesMock).toHaveBeenCalled();
  });

  it('should render <BestPlaces /> with 2 PlaceTile components', () => {
    const bestPlacesData = [
      {
        id: 1,
        name: 'FirstPlace',
        image: 'SomeImage',
      },
      {
        id: 2,
        name: 'SecondPlace',
        image: 'SomeImage',
      },
    ];
    const wrapper = shallow(<BestPlaces
      fetchBestPlaces={fetchBestPlacesMock}
      bestPlaces={bestPlacesData}
    />);
    expect(wrapper.find('PlaceTile')).toHaveLength(2);
  });
});
