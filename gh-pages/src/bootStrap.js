"use strict";
//This JS file simply bootstraps the app from the root component when the window loads
/*global window: false */

var AppRoot = require('./components/AppRoot.jsx');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var authjwt = require('client-auth-jwt/src/Auth.js');

//Keep references to these outside of the function
var appRootComponent;

//This function executes immediately
(function() {
    let authService = new authjwt();
  
    // Configure the authService
    authService.ProviderOAuthConfigs.google.clientId='34478033913-h13qnl7mfako0ean3uv6c9s6f8ujafki.apps.googleusercontent.com';
    authService.ProviderOAuthConfigs.google.redirectUri= window.location.origin + '/react-bp/googleStaticAuth.html';
  

    //This function is attached to execute when the window loads
    document.addEventListener('DOMContentLoaded', function() {
        
        ReactDOM.render(
            /* jshint ignore:start */
            <Router>
                <Route path="/" render={(routeProps) => <AppRoot location={routeProps.location} authService={authService} {...routeProps} />}/>
            </Router>, document.getElementById('app')
            /* jshint ignore:end */
        );

    });
})();
