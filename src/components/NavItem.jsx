var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var withRouter = require('react-router').withRouter;

module.exports = withRouter(class NavItem extends React.Component {
    render () {
        const isActive = this.props.router.isActive(this.props.to, this.props.onlyActiveOnIndex);
        const LinkComponent = this.props.index ? Link : IndexLink;
        const linkComponentProps = Object.assign({}, this.props);
        delete linkComponentProps.router;
        delete linkComponentProps.params;
        delete linkComponentProps.location;
        delete linkComponentProps.routes;

        return (
            /* jshint ignore:start */
            <li className={isActive ? 'active' : ''}>
                <LinkComponent {...linkComponentProps}>{this.props.children}</LinkComponent>
            </li>
           /* jshint ignore:end */
        )
    }
});
