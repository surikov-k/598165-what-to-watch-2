import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const films = [
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
  {
    id: 0,
    title: ``,
  },
];

describe(`<App />`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(
          <App
            films={films}
            onMovieTitleClick = {() => {}}
          />)
        .toJSON();

    expect(component).toMatchSnapshot();
  });
});
