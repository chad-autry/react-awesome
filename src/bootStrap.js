"use strict";
//This JS file simply bootstraps the app from the root component when the window loads
/*global window: false */

var AppRoot = require('./components/AppRoot.jsx');
var Home = require('./components/Home.jsx');
var IndexRedirect = require('react-router').IndexRedirect;
var Login = require('./components/Login.jsx');
var UserManagement = require('./components/UserManagement.jsx');
var React = require('react');
var ReactDOM = require('react-dom');
var Redirect = require('react-router').Redirect;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var useRouterHistory = require('react-router').useRouterHistory;
var createHistory = require('history').createHistory;
var authjwt = require('client-auth-jwt/src/Auth.js');


const history = useRouterHistory(createHistory)({
  basename: '/'
});

//Keep references to these outside of the function
var appRootComponent;

//This function executes immediately
(function() {
    let authService = new authjwt();
  
    // Configure the authService
    authService.ProviderOAuthConfigs.google.clientId='34478033913-h13qnl7mfako0ean3uv6c9s6f8ujafki.apps.googleusercontent.com';
    authService.ProviderOAuthConfigs.google.redirectUri= window.location.origin + '/react-bp/googleStaticAuth.html';
  
    var rerouteUnauthorized = function(nextState, replaceState) {
        if (!authService.isAuthenticated()) {
            replaceState('/login');
        }
    };

    //This function is attached to execute when the window loads
    document.addEventListener('DOMContentLoaded', function() {
        
        ReactDOM.render(
            /* jshint ignore:start */
            <Router history={history}>
                <Route path="/" authService={authService} component={AppRoot}>
                    <IndexRedirect to="/home" />
                    <Route path="/home" component={Home}/>
                    <Route path="/login" authService={authService} component={Login}/>
                    <Route path="/userMgmnt" authService={authService} component={UserManagement} 
                        onEnter={rerouteUnauthorized}/>
                    <Redirect from="*" to="/home"/>
                </Route>
            </Router>, document.getElementById('app')
            /* jshint ignore:end */
        );

    });
})();
