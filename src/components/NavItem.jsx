var Link = require('react-router-dom').Link;
var Route = require('react-router-dom').Route;
var React = require('react');

module.exports  = ({ to, ...rest }) => (
    /* jshint ignore:start */
    <Route path={to} children={({ match }) => (
        <li className={match ? 'active' : ''}>
            <Link to={to} children={rest.children}/>
        </li>
    )}/>
  /* jshint ignore:end */
);