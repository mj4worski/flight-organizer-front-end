import React from 'react';
import renderer from 'react-test-renderer';
import FlightList from '../../main/components/flight/FlightList';

it('should render FlightList with information about non existing flights', () => {
  const component = renderer.create(
    <FlightList />,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render FlightList which contains Flight component', () => {
  const flights = [
    {
      id: 1,
      arrivalTo: 'Paris',
      departureFrom: 'Barcelona',
    },
    {
      id: 2,
      arrivalTo: 'Cracow',
      departureFrom: 'Moscow',
    },
  ];

  const component = renderer.create(
    <FlightList flights={flights} />,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

