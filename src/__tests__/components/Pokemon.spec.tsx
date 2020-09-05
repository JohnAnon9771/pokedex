import React from 'react';
import renderer from 'react-test-renderer';

test('test of jest', () => {
  const component = renderer.create(<h1>Hello world</h1>);

  expect(component).toMatchSnapshot();
});
