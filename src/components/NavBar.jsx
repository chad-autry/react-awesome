var React = require('react');

/**
 * Create a React component for the NavBar
 * The only state it contains is if it is collapsed or not
 * It is passed in authentication, and route state for display
 */
module.exports = React.createClass({
    getInitialState: function() {
        return {menuCollapsed: true};
    },
    menuClicked: function() {
        this.setState({
            menuCollapsed: !this.state.menuCollapsed
        });
    },
    render: function() {
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
                        <li className="active"> {/*Hard Code Activity for now until introducing route state*/}
                            <a>
                                <i className="fa fa-home"></i> Home
                            </a>
                        </li>
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
                        <li>
                            <a href={this.props.isAuthenticated ? this.props.logoutUrl : this.props.logonUrl}>
                                <i className="fa fa-user"></i> {this.props.isAuthenticated ? this.props.userName + ' ': "Logon "}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
});
