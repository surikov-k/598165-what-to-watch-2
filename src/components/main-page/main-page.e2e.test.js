import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './main-page';

Enzyme.configure({adapter: new Adapter()});

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
  it(`fires onClick callback after click on each movie title`, () => {
    const onClick = jest.fn();
    const component = shallow(
        <MainPage
          films={films}
          onMovieTitleClick={onClick}
        />
    );

    const links = component.find(`.small-movie-card__link`);

    links.forEach((link) => link.simulate(`click`));
    expect(onClick).toHaveBeenCalledTimes(20);
  });
});
