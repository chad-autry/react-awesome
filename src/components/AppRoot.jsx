var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var React = require('react');
var AuthorizingRoute = require('./AuthorizingRoute.jsx');
var Route = require('react-router-dom').Route;
var Redirect = require('react-router-dom').Redirect;
var Switch = require('react-router-dom').Switch;
var Login = require('./Login.jsx');
var UserManagement = require('./UserManagement.jsx');
var Home = require('./Home.jsx');

module.exports = class AppRoot extends React.Component {
    constructor(props) {	 
        super(props);
        //Register for Authentication state changes
        this.props.authService.onAuthChange(() => {
            this.setState({
                isAuthenticated: this.props.authService.isAuthenticated()
            });
            
        });
        this.state = {isAuthenticated: this.props.authService.isAuthenticated()};
    }

    render() {
        return (
            /* jshint ignore:start */
            <div className="container-fluid">
                <NavBar authService={this.props.authService} isAuthenticated={this.state.isAuthenticated}/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" render={(routeProps) => <Login isAuthenticated={this.state.isAuthenticated} authService={this.props.authService} {...routeProps} />}/>
                    <AuthorizingRoute path="/userMgmnt" authService={this.props.authService} component={UserManagement}/>
                    <Redirect from="*" to="/home"/>
               </Switch>
                <Footer/>
            </div>
            /* jshint ignore:end */
        );
    }
};
