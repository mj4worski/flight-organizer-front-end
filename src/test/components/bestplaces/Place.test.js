import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Place from '../../../main/components/bestplaces/Place';

it('should render Place component with default image', () => {
  const component = renderer.create(
    <MemoryRouter >
      <Place name="Warsaw" />
    </MemoryRouter>,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render Place component with backgroundImage as url-to-image', () => {
  const component = renderer.create(
    <MemoryRouter >
      <Place name="Warsaw" image="url-to-image" />
    </MemoryRouter>,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
