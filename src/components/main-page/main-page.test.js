import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './main-page.jsx';

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

describe(`<MainPage`, () => {
  it(`renders correctly`, () => {
    const component = renderer
    .create(
        <MainPage
          films={films}
          onMovieTitleClick={() => {}}
        />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
