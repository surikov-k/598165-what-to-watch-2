import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {getFilms} from './data';

const films = getFilms();

ReactDOM.render(
    <App
      films={films}
      onMovieTitleClick={() => {}}
    />,
    document.querySelector(`#root`)
);
