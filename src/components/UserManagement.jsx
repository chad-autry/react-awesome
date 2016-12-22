var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    },
    logout: function() {
        this.props.route.authService.logout();
        this.context.router.push('/login');
    },
    render: function() {
        return (
            /* jshint ignore:start */

            <div className="container">
                <div className="center-form panel">
                    <div className="jumbotron" onClick={this.logout}>
                        <h1 className="text-center">Click me to log out</h1>
                    </div>
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
});