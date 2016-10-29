var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var Home = require('./Home.jsx');
var React = require('react');

module.exports = React.createClass({
    

    render: function() {
        return (
            <div className="container-fluid">
                <NavBar/>
                <Home/>
                <Footer/>
            </div>
        );
    }
});
