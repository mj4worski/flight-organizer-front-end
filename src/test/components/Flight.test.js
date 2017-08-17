import React from 'react';
import renderer from 'react-test-renderer';
import Flight from '../../main/components/flight/Flight';

it('should render Flight component with arrivalTo and departureFrom props', () => {
  const flight = {
    arrivalTo: 'Paris',
    departureFrom: 'Barcelona',
  };
  const component = renderer.create(
    <Flight flight={flight} />,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
