var React = require('react');

module.exports = class Footer extends React.Component {
    render() {
        return (
            /* jshint ignore:start */
            <footer className="footer">
            <div className="footer-inner">
                <p>
                    <i className="fa fa-copyright"></i> 2016 <a href="http://chad-autry.github.io/">Chad Autry</a>.
                </p>
            </div>
            </footer>
            /* jshint ignore:end */
        );
    }
};
