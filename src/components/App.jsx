import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

const ComponentList = React.lazy(() => import('./ComponentList'));
import MainMenu from './MainMenu';
const Home = React.lazy(() =>
  import('./Home').then((module) => ({ default: module.Home }))
);
const About = React.lazy(() =>
  import('./About').then((module) => ({ default: module.About }))
);
export const App = () => {
  return (
    //Run with --history-api-fallback or use HashRouter.
    <BrowserRouter>
      <MainMenu />
      <div className='main-content'>
        <React.Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route path={['/', '/index', '/home']} exact component={Home} />
            <Route path='/components' exact component={ComponentList} />
            <Route path='/about' exact component={About} />
            <Route render={() => <h1>404 Not Found!</h1>} />
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
};
