var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var React = require('react');
var Route = require('react-router-dom').Route;
var Redirect = require('react-router-dom').Redirect;
var Switch = require('react-router-dom').Switch;
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
                    <Redirect from="*" to="/home"/>
               </Switch>
                <Footer/>
            </div>
            /* jshint ignore:end */
        );
    }
};
