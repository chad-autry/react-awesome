var Route = require('react-router-dom').Route;
var Redirect = require('react-router-dom').Redirect;
var React = require('react');

module.exports = ({ component: Component, ...rest }) => (
  /* jshint ignore:start */
  <Route {...rest} render={props => (
    rest.authService.isAuthenticated() ? (
      <Component {...rest}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
  /* jshint ignore:end */
);