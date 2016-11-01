"use strict";
//This JS file simply bootstraps the app from the root component when the window loads

var AppRoot = require('./components/AppRoot.jsx');
var React = require('react');
var ReactDOM = require('react-dom');

//Keep references to these outside of the function
var appRootComponent;

//This function executes immediately
(function() {
    
    //This function is attached to execute when the window loads
    document.addEventListener('DOMContentLoaded', function() {
        
        ReactDOM.render(
            /* jshint ignore:start */
            <AppRoot/>, document.getElementById('app')
            /* jshint ignore:end */
        );

    });
})();
