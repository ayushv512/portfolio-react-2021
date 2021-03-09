import React, { Suspense, lazy } from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
// import LoadingComponent from './components/loading/loading-component';
import HeaderComponent from './components/header/header.component';
import { routesNav } from './config/config';

const Home = lazy(() => import('./pages/home/home.page'));
const About = lazy(() => import('./pages/about/about.page'));
const Projects = lazy(() => import('./pages/projects/projects.page'));
const Contact = lazy(() => import('./pages/contact/contact.page'));


const history = createHistory();

const routeLabels = routesNav.map((item) => item.to);

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={''}>
      <>
        <HeaderComponent />
        <Switch>
          {/* Home Page Route */}
          <Route exact path="/" component={Home} />
          {/* Products Page Route */}
          <Route exact path={routeLabels[1]} component={About} />
          {/* Why Us Route */}
          <Route exact path={routeLabels[2]} component={Projects} />
          {/* Contact Us Route */}
          <Route exact path={routeLabels[3]} component={Contact} />
          <Redirect to="/" />
        </Switch>
      </>
    </Suspense>
  </Router>
);

export default AppRouter;
