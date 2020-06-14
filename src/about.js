import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';

const TestPage = () => <h1>{'Just a test page :)'}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <TestPage />
  </React.StrictMode>,
  document.getElementById('root')
);
