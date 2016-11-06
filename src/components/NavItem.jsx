var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var withRouter = require('react-router').withRouter;

module.exports = withRouter(React.createClass({
    render () {
        const isActive = this.props.router.isActive(this.props.to, this.props.onlyActiveOnIndex);
        const LinkComponent = this.props.index ? Link : IndexLink;

        return (
            /* jshint ignore:start */
            <li className={isActive ? 'active' : ''}>
                <LinkComponent {...this.props}>{this.props.children}</LinkComponent>
            </li>
           /* jshint ignore:end */
        )
    }
}));