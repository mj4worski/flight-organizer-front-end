import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import PlaceTile from '../../../main/components/bestplaces/components/PlaceTile';

it('should render PlaceTile component with default image', () => {
  const component = renderer.create(
    <MemoryRouter >
      <PlaceTile name="Warsaw" />
    </MemoryRouter>,

  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render PlaceTile component with backgroundImage as url-to-image', () => {
  const component = renderer.create(
    <MemoryRouter >
      <PlaceTile name="Warsaw" image="url-to-image" />
    </MemoryRouter>,
   );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
