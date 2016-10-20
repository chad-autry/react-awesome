"use strict";
//This JS file simply bootstraps the app from the root component when the window loads

//Require all the things needed which will be injected
var React = require('react');
var ReactDom = require('react-dom');

//Keep references to these outside of the function
var appRootComponent;

//This function executes immediately
(function() {
    
    //This function is attached to execute when the window loads
    document.addEventListener('DOMContentLoaded', function() {
        
        appRootComponent = require('./components/appRoot.js')(React);

    });
})();
