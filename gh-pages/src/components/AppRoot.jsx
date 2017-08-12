import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';

const AppRoot = ({ location }) =>
  <div className="container-fluid">
    <NavBar location={location} />
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect from="*" to="/home" />
    </Switch>
    <Footer />
  </div>;

export default AppRoot;
