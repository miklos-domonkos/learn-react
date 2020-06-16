import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='app-logo-container'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div className='menu-wrapper'>
          <ul>
            <li>
              <NavLink
                exact
                to={'/home'}
                activeClassName='selected'
                isActive={(match, location) => {
                  return ['/', '/home', '/index'].includes(location.pathname);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to={'/components'} activeClassName='selected'>
                Components
              </NavLink>
            </li>
            <li>
              <NavLink exact to={'/about'} activeClassName='selected'>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
