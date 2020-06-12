import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg'
import style from './index.css';
import ComponentList from './ComponentList';

var [a, , b] = [1, 2, 3];
console.log(a);

const App = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello React</h1>
      <ComponentList />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
