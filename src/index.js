import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';

//Test babel transpile
var [a, , b] = [1, 2, 3];
console.log(a, b);

ReactDOM.render(
  <React.StrictMode>
    <App className='App' />
  </React.StrictMode>,
  document.getElementById('root')
);
