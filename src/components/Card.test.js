import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders vertically', () => {
  const component = renderer.create(
    <Card vertical/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders children', () => {
  const component = renderer.create(
    <Card>
      <h1>Testing with multiple children</h1>
      A short paragraph
      </Card>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders with extra classes', () => {
  const component = renderer.create(
    <Card classes={["an", "array", "of classes"]}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});