import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Icon />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with a logo', () => {
  const component = renderer.create(
    <Icon icon="logo"/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
