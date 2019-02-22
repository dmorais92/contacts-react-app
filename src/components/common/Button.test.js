import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders multiple children', () => {
  const component = renderer.create(
    <Button>
      <h1>Testing with multiple children</h1>
      A short paragraph
    </Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with extra classes', () => {
  const component = renderer.create(
    <Button classes={["an", "array", "of classes"]}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});