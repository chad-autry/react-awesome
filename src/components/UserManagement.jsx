var React = require('react');
var Link = require('react-router').Link;
var PropTypes = require('prop-types');

module.exports = class UserManagement extends React.Component {

    constructor(props) {
        super(props);
        // This line is important!
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.route.authService.logout();
        this.context.router.push('/login');
    }

    render() {
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
};

// Ask for 'router' from context
module.exports.contextTypes = {
    router: PropTypes.object.isRequired
};
