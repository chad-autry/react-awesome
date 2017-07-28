var React = require('react');
var MaskedGroup = require('./MaskedGroup.jsx')
module.exports  = ({height, width, transform, href, ...rest }) => {
	let defs = [];
    let children = [];
    let maskId = 0;
    let iconChildren = React.Children.toArray(rest.children);

    //Build the children in reverse, they may or may not become nested in another element 
    if (!!href) {
    	children.push(<use key={0} xlinkHref={"" + href}/>);
    }
    for (let i = iconChildren.length - 1; i > -1; i--) {
    	if (iconChildren[i].props.isCutout) {
    		defs.push(
    		  <mask key={i} id={"mask" + maskId}>
                <rect id="bg" x="0" y="0" width="100%" height="100%" fill="white"/>
               {React.cloneElement(iconChildren[i], { fill: "black" })}
              </mask>);
              let maskedGroupChildren = children;
              children = [];
              children.push(<MaskedGroup key={i} maskId={"mask"+maskId} children={maskedGroupChildren}/>);
              maskId++;
    	} else {
    		children.push(iconChildren[i]);
    	}
    }
	return (
    /* jshint ignore:start */
    <svg height={height} width={width}>
        <defs>
            {defs}
        </defs>
        {/*This transform centers the children, and makes rotation/skew transforms be about center*/}
        <g transform={"translate("+width/2 + " " +  height/2 + ") " + (!!transform ? transform : "") + " translate(" + -1*width/2 + " " + -1*height/2 +")"}>
            {children}
       </g>
   </svg>
  /* jshint ignore:end */
)};