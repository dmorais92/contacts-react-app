import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import renderer from 'react-test-renderer';

const TEST_USER =   {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a user', () => {
  const component = renderer.create(
    <User user={TEST_USER}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
