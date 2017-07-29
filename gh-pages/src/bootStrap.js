"use strict";
//This JS file simply bootstraps the app from the root component when the window loads
/*global window: false */

var AppRoot = require('./components/AppRoot.jsx');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;

//Keep references to these outside of the function
var appRootComponent;

//This function executes immediately
(function() {

    //This function is attached to execute when the window loads
    document.addEventListener('DOMContentLoaded', function() {
        
        ReactDOM.render(
            /* jshint ignore:start */
            <Router basename="/react-awesome">
                <Route path="/" render={(routeProps) => <AppRoot location={routeProps.location} {...routeProps} />}/>
            </Router>, document.getElementById('app')
            /* jshint ignore:end */
        );

    });
})();
