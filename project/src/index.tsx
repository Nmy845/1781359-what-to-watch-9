import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Information = {
  FILM_NAME: 'zzzz',
  FILM_TYPE: 'Dramma',
  FILM_YEAR: 2011,
};
ReactDOM.render(
  <React.StrictMode>
    <App
      name = {Information.FILM_NAME}
      year = {Information.FILM_YEAR}
      type = {Information.FILM_TYPE}
    />
  </React.StrictMode>,
  document.getElementById('root'));
