import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/home/App';

if(process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

