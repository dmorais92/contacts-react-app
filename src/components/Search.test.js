import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders multiple children', () => {
  const component = renderer.create(
    <Search>
      <h1>Testing with multiple children</h1>
      A short paragraph
    </Search>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with extra classes', () => {
  const component = renderer.create(
    <Search classes={["an", "array", "of classes"]}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});