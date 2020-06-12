import React from 'react';
import logo from '../logo.svg';
import './App.css';
import ComponentList from './ComponentList';
export const App = () => {
  return (<>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>Hello React</h1>
    <ComponentList />
  </>);
};
