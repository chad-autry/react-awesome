import MaskedGroup from "./MaskedGroup.jsx";
import React from "react";

const getUuidv4 = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, match => {
    const rand = (Math.random() * 16) | 0;
    const value = match === "x" ? rand : (rand & 0x3) | 0x8;
    return value.toString(16);
  });

const Icon = ({
  height: providedHeight = 16,
  width: providedWidth = 16,
  scale = 1,
  transform = "",
  href,
  shiftX: providedShiftX = 0,
  shiftY: providedShiftY = 0,
  children: providedChildren,
  // eslint-disable-next-line no-unused-vars
  isCutout,
  ...rest
}) => {
  const localUuid = getUuidv4();
  const height = providedHeight * scale;
  const width = providedWidth * scale;
  //TODO Aspect ratios? Is there a way to inspect the href for an aspect ratio?

  const shiftX = scale * providedShiftX;
  const shiftY = scale * providedShiftY;
  //TODO Again, aspect ratio?

  const defs = [];
  let children = [];
  let maskId = 0;
  const iconChildren = React.Children.toArray(providedChildren);

  //Build the children in reverse, they may or may not become nested in another element
  if (href) {
    children.push(<use key={0} href={href} />);
  }
  for (let i = iconChildren.length - 1; i > -1; i--) {
    if (iconChildren[i].props.isCutout) {
      defs.push(
        <mask key={i} id={localUuid + "mask" + maskId}>
          <rect id="bg" x="0" y="0" width="100%" height="100%" fill="white" />
          {React.cloneElement(iconChildren[i], {
            style: { fill: "black" },
            width: width,
            height: height
          })}
        </mask>
      );
      const maskedGroupChildren = children;
      children = [];
      children.push(
        <MaskedGroup key={i} maskId={`${localUuid}mask${maskId}`}>
          {maskedGroupChildren}
        </MaskedGroup>
      );
      maskId++;
    } else {
      children.unshift(
        React.cloneElement(iconChildren[i], {
          width: width,
          height: height
        })
      );
    }
  }

  const width2 = width / 2;
  const height2 = height / 2;
  return (
    /* jshint ignore:start */
    <svg height={height} width={width} {...rest}>
      <defs>
        {defs}
      </defs>
      {/*This transform centers the children, and makes rotation/skew transforms be about center*/}
      <g
        transform={`translate(${shiftX + width2} ${shiftY +
          height2}) ${transform} translate(${-1 * width2} ${-1 * height2})`}>
        {children}
      </g>
    </svg>
    /* jshint ignore:end */
  );
};

export default Icon;
