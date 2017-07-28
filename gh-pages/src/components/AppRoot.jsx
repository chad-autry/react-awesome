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
    }

    render() {
        return (
            /* jshint ignore:start */
            <div className="container-fluid">
                <NavBar location={this.props.location}/>
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
