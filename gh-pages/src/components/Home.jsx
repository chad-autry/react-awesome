var React = require('react');
var Icon = require('../../../src/Icon.jsx');

module.exports = class Home extends React.Component {
    render() {
        return (
            /* jshint ignore:start */
            <div>
                <div className="jumbotron">
                  <h1 className="text-center">Features</h1>
                  <ul className="lead">
                    <li>
                    Single powerful nestable component
                    </li>
                    <li>
                    Color and transparency hierarchy
                    </li>
                    <li>
                    Easily turn a component into a 'cutout' on subsequent grouped elements
                    </li>
                    <li>
                    Automatic centering of nested elements
                    </li>
                    <li>
                    Full Power of SVG transforms available
                    </li>
                        <ul>
                            <li>
                            Compatible with automatic centering
                    	    </li>
                    	</ul>
                  </ul>
                </div>
            
                <div className="marketing">
                  <Icon width="42" height="42" href="/sprites.svg#arrow-down"/>
                  <Icon width="42" height="42" href="/sprites.svg#trophy">
                      <Icon width="42" height="42" transform="translate(0 -5) scale(.25) rotate(180)" href="sprites.svg#arrow-down" isCutout={true}/>
                  </Icon>
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
};
