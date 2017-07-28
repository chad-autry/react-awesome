var React = require('react');
module.exports  = ({maskId, children }) =>  (
    /* jshint ignore:start */
    <g mask={"url(#"+maskId+")"}>
            {children}
    </g>
    /* jshint ignore:end */
);