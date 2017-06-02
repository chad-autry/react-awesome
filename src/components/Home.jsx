var React = require('react');

module.exports = class Home extends React.Component {
    render() {
        return (
            /* jshint ignore:start */
            <div>
                <div className="jumbotron">
                  <h1 className="text-center">Notice</h1>
                  <ul className="lead">
                    <li>
                      <i className="fa fa-exclamation-triangle"></i>&nbsp;react-bp is my own personal template for a front end web client. Documentation light, but should be fairly easy for others to get into.
                    </li>
                    <li>
                      <i className="fa fa-code-fork"></i>&nbsp;react-bp has its origins in <a href="https://github.com/joshdmiller">joshdmiller's</a>&nbsp;<a href="https://github.com/ngbp/ngbp">ngbp project</a>.
                      It has since then been heavily modified.
                    </li>
                  </ul>
                </div>
            
                <div className="marketing">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <h4><i className="fa fa-gears"></i> npm</h4>
                      <p>
                        Dependency management, build, and test execution rolled into one
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <h4><i className="fa fa-suitcase"></i> Webpack</h4>
                      <p>
                        A module bundler for all our source files.&nbsp;
                        <a href="https://webpack.github.io/docs/">
                          More &raquo;
                        </a>
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <h4><i className="fa fa-facebook-square"></i> Facebook React</h4>
                      <p>
                        A declarative, component based, javascript library for building user interfaces.&nbsp;
                        <a href="https://facebook.github.io/react/">More &raquo;</a>
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <h4><i className="fa fa-flag"></i> Font Awesome</h4>
                      <p>
                        The iconic font designed for use with Twitter Bootstrap.&nbsp;
                        <a href="http://fortawesome.github.com/Font-Awesome">
                          More &raquo;
                        </a>
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <h4><i className="fa fa-twitter"></i> Twitter Bootstrap</h4>
                      <p>
                        Sleek, intuitive, and powerful front-end framework for faster and easier
                        web development.&nbsp;
                        <a href="http://getbootstrap.com">More &raquo;</a>
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <h4><i className="fa fa-search-minus"></i> LESS CSS</h4>
                      <p>
                        The dynamic stylesheet language that extends CSS with efficiency.&nbsp;
                        <a href="http://lesscss.org">More &raquo;</a>
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <h4><i className="fa fa-sign-in"></i> OAuth</h4>
                      <p>
                        Built in widgets and routing for Google OAuth2 and private authentication
                        <a href="https://github.com/chad-autry/client-auth-jwt">More &raquo;</a>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
};
