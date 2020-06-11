import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import ComponentList from './ComponentList';

var [a, , b] = [1, 2, 3];
console.log(a);

const App = () => {
  return (
    <>
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
