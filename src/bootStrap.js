"use strict";
//This JS file simply bootstraps the app from the root component when the window loads

var AppRoot = require('./components/AppRoot.jsx');
var Home = require('./components/Home.jsx');
var IndexRedirect = require('react-router').IndexRedirect;
var Login = require('./components/Login.jsx');
var React = require('react');
var ReactDOM = require('react-dom');
var Redirect = require('react-router').Redirect;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var useRouterHistory = require('react-router').useRouterHistory;
var createHistory = require('react-router/node_modules/history').createHistory;
var authjwt = require('auth-jwt/src/Auth.js');


const history = useRouterHistory(createHistory)({
  basename: '/react-bp'
});

//Keep references to these outside of the function
var appRootComponent;

//This function executes immediately
(function() {
    
    //This function is attached to execute when the window loads
    document.addEventListener('DOMContentLoaded', function() {
        
        ReactDOM.render(
            /* jshint ignore:start */
            <Router history={history}>
                <Route path="/" component={AppRoot}>
                    <IndexRedirect to="/home" />
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Redirect from="*" to="/home"/>
                </Route>
            </Router>, document.getElementById('app')
            /* jshint ignore:end */
        );

    });
})();
