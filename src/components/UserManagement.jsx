var React = require('react');
var Redirect = require('react-router-dom').Redirect;
var PropTypes = require('prop-types');

module.exports = class UserManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {redirectToLogin:false};
        // This line is important!
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.authService.logout();
        this.setState({redirectToLogin:true});
    }

    render() {
         if (this.state.redirectToLogin) {
            return (
                /* jshint ignore:start */
                <Redirect to='/login'/>
                /* jshint ignore:end */
            );
        }
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
