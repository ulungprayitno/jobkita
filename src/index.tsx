/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root,
  );
}
