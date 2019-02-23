import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import renderer from 'react-test-renderer';
import TEST_USERS from '../dev/users.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a list of users', () => {
  const component = renderer.create(
    <UserList users={TEST_USERS}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
