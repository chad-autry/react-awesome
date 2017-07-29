var React = require('react');
var MaskedGroup = require('./MaskedGroup.jsx')
module.exports  = ({height, width, sizeMultiplier, transform, href, ...rest }) => {
	let myHeight = height;
	let myWidth = width;
	if (!width || !height) {
		myHeight = 16;
		myWidth = 16;
		if (!!sizeMultiplier) {
			myHeight = myHeight * sizeMultiplier;
			myWidth = myWidth * sizeMultiplier;
		}
	}
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
               {React.cloneElement(iconChildren[i], { fill: "black", width:myWidth, height:myHeight })}
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
    <svg height={myHeight} width={myWidth}>
        <defs>
            {defs}
        </defs>
        {/*This transform centers the children, and makes rotation/skew transforms be about center*/}
        <g transform={"translate("+myWidth/2 + " " +  myHeight/2 + ") " + (!!transform ? transform : "") + " translate(" + -1*myWidth/2 + " " + -1*myHeight/2 +")"}>
            {children}
       </g>
   </svg>
  /* jshint ignore:end */
)};