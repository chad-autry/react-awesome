var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var React = require('react');


module.exports = React.createClass({
    

    render: function() {
        return (
            /* jshint ignore:start */
            <div className="container-fluid">
                <NavBar/>
                {this.props.children}
                <Footer/>
            </div>
            /* jshint ignore:end */
        );
    }
});
