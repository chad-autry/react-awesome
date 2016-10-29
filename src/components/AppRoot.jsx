var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var React = require('react');

module.exports = React.createClass({
    

    render: function() {
        return (
            <div class="container-fluid">
                <NavBar/>
                <Footer/>
            </div>
        );
    }
});
