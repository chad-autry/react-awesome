var React = require('react');
var NavItem = require('./NavItem.jsx');

/**
 * Create a React component for the NavBar
 * The only state it contains is if it is collapsed or not
 * It is passed in authentication, and route state for display
 */
module.exports =  class NavBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {menuCollapsed: true};
        // This line is important!
        this.menuClicked = this.menuClicked.bind(this);
    }

    menuClicked() {
        this.setState({
            menuCollapsed: !this.state.menuCollapsed
        });
    }

     shouldComponentUpdate(nextProps, nextState) {
        // Don't blow the stack out by re-rendering when this components height is set to the parent
        return this.props.isAuthenticated != nextProps.isAuthenticated || this.state.menuCollapsed != nextState.menuCollapsed;
    }

    render() {
        return (
            /* jshint ignore:start */
            <div className="navbar navbar-default">
                <div className="navbar-header" onClick={this.menuClicked}>
                    <div className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <i className={this.state.menuCollapsed ? 'fa fa-chevron-right':'fa fa-chevron-down'}></i>
                    </div>
                    <div className="navbar-brand">
                        <i className="fa fa-cube"></i> react-bp
                    </div>
                </div>
                { /*Programatically controll hiding the collapse using react.
                    Due to hdpi devices, we're collapsible on both on both xs and sm screens */ }
                <div className={this.state.menuCollapsed ? 'navbar-collapse hidden-xs hidden-sm' : 'navbar-collapse'}>
                    <ul className="nav navbar-nav">
                            <NavItem to="/home" activeClassName="active">
                                 <i className="fa fa-home"></i> Home
                            </NavItem>
                        <li>
                            <a href="https://github.com/chad-autry/react-bp">
                                <i className="fa fa-github-alt"></i> Github
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/chad-autry/react-bp/issues">
                                <i className="fa fa-comments"></i> Support
                            </a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                            <NavItem to={this.props.isAuthenticated ? "/userMgmnt" : "/login"} activeClassName="active">
                                 <i className={this.props.isAuthenticated ? "fa fa-user" : "fa fa-sign-in"}></i> {this.props.isAuthenticated ? this.props.authService.getPayload().name + ' ': "Logon "}
                            </NavItem>
                    </ul>
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
};
