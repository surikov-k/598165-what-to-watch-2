import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {
    films,
    onMovieTitleClick,
  } = props;

  return (
    <MainPage
      films={films}
      onMovieTitleClick={onMovieTitleClick}
    />
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default App;
