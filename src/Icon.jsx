var React = require('react');
var MaskedGroup = require('./MaskedGroup.jsx')
module.exports  = ({height,
                    width, 
                    sizeMultiplier, 
                    transform, 
                    href, 
                    shiftLeft,
                    shiftRight,
                    shiftUp,
                    shiftDown,
                    ...rest }) => {
	let myHeight = height;
	let myWidth = width;
	let grid = 16; //TODO This should probablly be the same as the default height/width
	if (!width || !height) {
		myHeight = 16;
		myWidth = 16;
		if (!!sizeMultiplier) {
			myHeight = myHeight * sizeMultiplier;
			myWidth = myWidth * sizeMultiplier;
		}
		//TODO Aspect ratios? Is there a way to inspect the href for an aspect ratio?
	}
	let shiftX = !!shiftLeft ? (-1*Number(shiftLeft)) : 0;
	shiftX = !!shiftRight ? (shiftX + Number(shiftRight)) : shiftX;
	let shiftY = !!shiftUp ? (-1*Number(shiftUp)) : 0;
	shiftY = !!shiftDown ? (shiftY + Number(shiftDown)) : shiftY;
	if (!!sizeMultiplier) {
	    shiftY = sizeMultiplier*shiftY;
	    shiftX = sizeMultiplier*shiftX;
	    //TODO Again, aspect ratio?
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
               {React.cloneElement(iconChildren[i], { fill: "black", width:myWidth, height:myHeight, sizeMultiplier:sizeMultiplier})}
              </mask>);
              let maskedGroupChildren = children;
              children = [];
              children.push(<MaskedGroup key={i} maskId={"mask"+maskId} children={maskedGroupChildren}/>);
              maskId++;
    	} else {
    		children.unshift(React.cloneElement(iconChildren[i], {width:myWidth, height:myHeight, sizeMultiplier:sizeMultiplier}));
    	}
    }
	return (
    /* jshint ignore:start */
    <svg height={myHeight}
         width={myWidth}  
    	 style={rest.style}
    	 className={rest.className}>
        <defs>
            {defs}
        </defs>
        {/*This transform centers the children, and makes rotation/skew transforms be about center*/}
        <g transform={"translate("+(shiftX+myWidth/2) + " " + (shiftY +  myHeight/2) + ") " + (!!transform ? transform : "") + " translate(" + -1*myWidth/2 + " " + -1*myHeight/2 +")"}>
            {children}
       </g>
   </svg>
  /* jshint ignore:end */
)};