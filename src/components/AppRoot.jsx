var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var React = require('react');


module.exports = React.createClass({
    
    getInitialState: function() {
        //Register for Authentication state changes
        this.props.route.authService.onAuthChange(() => {
            this.setState({
                isAuthenticated: this.props.route.authService.isAuthenticated()
            });
            
        });
        //Set the initial authentication state
        return {isAuthenticated: this.props.route.authService.isAuthenticated()};
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="container-fluid">
                <NavBar authService={this.props.route.authService}/>
                {this.props.children}
                <Footer/>
            </div>
            /* jshint ignore:end */
        );
    }
});
