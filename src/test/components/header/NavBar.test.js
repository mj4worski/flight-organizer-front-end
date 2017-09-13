import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import NavBar from '../../../main/components/header/NavBar/NavBar';

it('should render NavBar with 3 navigation links', () => {
  const component = renderer.create(
    <MemoryRouter >
      <NavBar />
    </MemoryRouter>,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
