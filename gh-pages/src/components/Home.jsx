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
                <ul>
                    <li> A basic icon, default 16 px size <Icon href="./sprites.svg#arrow-down"/>
                        <div className="well"><p>{'<Icon href="./sprites.svg#arrow-down"/>'}</p></div>
                    </li>
                    <li> We can multiply its size <Icon sizeMultiplier="3" href="./sprites.svg#arrow-down"/>
                        <div className="well"><p>{'<Icon sizeMultiplier="3" href="./sprites.svg#arrow-down"/>'}</p></div>
                    </li>
                    <li> We can color and style it with CSS <Icon sizeMultiplier='3' style={{fill: 'blue'}} href="./sprites.svg#arrow-down"/>
                        <div className="well"><p>{"<Icon sizeMultiplier='3' style={{fill: 'blue'}} href='./sprites.svg#arrow-down'/>"}</p></div>
                    </li>
                    <li> Or style it with CSS classes <Icon sizeMultiplier='3' className='blueIcon' href='./sprites.svg#arrow-down'/>
                        <div className="well"><p>{"<Icon sizeMultiplier='3' className='blueIcon' href='./sprites.svg#arrow-down'/>"}</p></div>
                    </li>
                    <li> We can apply SVG transforms <Icon transform='rotate(180)'  sizeMultiplier='3' className='blueIcon' href='./sprites.svg#arrow-down'/>
                        <div className="well"><p>{"<Icon transform='rotate(180)' sizeMultiplier='3' style={{fill: 'blue'}} href='./sprites.svg#arrow-down'/>"}</p></div>
                        <div className="alert alert-info" role="alert">The transforms are automatically applied about the Icon's midpoint (standard SVG is top left corner)</div>
                        <div className="alert alert-info" role="alert">Multiple transforms can be applied, they take affect from right to left (standard SVG)</div>
                    </li>
                    <li> We can group/stack Icons 
                        <Icon sizeMultiplier="3" style={{fill: 'blue'}}>
                            <Icon href="sprites.svg#star" />
                            <Icon style={{fill: 'red'}} transform="scale(.75)" href="sprites.svg#star" />
                            <Icon transform="scale(.5)" href="sprites.svg#star" />
                        </Icon>
                        <div className="well"><p>{'<Icon sizeMultiplier="3" style={{fill: "blue"}}>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon href="sprites.svg#star" />'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon style={{fill: "red"}} transform="scale(.75)" href="sprites.svg#star" />'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon transform="scale(.5)" href="sprites.svg#star" />'}
                            <br/>{'</Icon>'}</p>
                        </div>
                        <div className="alert alert-info" role="alert">Notice the href is optional and can be ommited to treat Icon as a group</div>
                        <div className="alert alert-info" role="alert">When the href is included, it is the topmost icon. 
                                                                       Since you likely want the topmost icon the smallest, and transforms are communicative through the layers, you'll likely ommit it</div>
                    </li>
                    <li> We can nest Icons in multiple levels
                        <Icon sizeMultiplier="3" style={{fill: 'blue'}}>
                            <Icon href="sprites.svg#star" />
                            <Icon style={{fill: 'red'}} transform="scale(.75)" >
                                <Icon href="sprites.svg#star" />
                                <Icon style={{fill: 'green'}} transform="scale(.75)" href="sprites.svg#star" />
                            </Icon>
                        </Icon>
                        <div className="well"><p>{'<Icon sizeMultiplier="3" style={{fill: "blue"}}>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon href="sprites.svg#star" />'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon style={{fill: "red"}} transform="scale(.75)" >'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon href="sprites.svg#star" />'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon style={{fill: "green"}} transform="scale(.75)" href="sprites.svg#star" />'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'</Icon>'}
                            <br/>{'</Icon>'}</p></div>
                        <div className="alert alert-info" role="alert">Again, notice transforms are communicative. And calculated with respect to the parent Icon, and not the top level</div>
                    </li>
                    <li> We can create cutouts, or holes with icons
                        <Icon sizeMultiplier="3" style={{fill: 'blue'}} href="sprites.svg#star">
                            <Icon isCutout transform="scale(.75)" href="sprites.svg#star" />
                        </Icon>
                        <div className="well"><p>{'<Icon sizeMultiplier="3" href="sprites.svg#star" style={{fill: "blue"}}>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon isCutout transform="scale(.75)" href="sprites.svg#star" />'}
                            <br/>{'</Icon>'}</p></div>
                        <div className="alert alert-info" role="alert">A cutout applies to all Icons stacked above it</div>
                    </li>
                    <li> We have convenience attributes to sfift icons based on the grid, instead of trying to stick translate(# #) calls in the transform attribute
                        <Icon sizeMultiplier="3" style={{fill: 'blue'}} href="sprites.svg#star">
                            <Icon isCutout shiftUp="1" transform="scale(.5)" href="sprites.svg#star" />
                        </Icon>
                        <div className="well"><p>{'<Icon sizeMultiplier="3" href="sprites.svg#star" style={{fill: "blue"}}>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'<Icon isCutout shiftUp="1" transform="scale(.5)" href="sprites.svg#star" />'}
                            <br/>{'</Icon>'}</p></div>
                    </li>
                </ul>
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
};
