var React = require('react');

module.exports  = ({ to, ...rest }) => (
    //Centering?
    //Iterate through the children
        //If child.props.cutout == true
            //Render as Cutout in defs (with incremented cutoutid)
            //Begin a masked group with cutout id
        //Else Render child, passing in parent color and transparency if not defined locally
    //If contains xref
        //Render a use element
    //Close all masking groups
    
    /* jshint ignore:start */
    <Route path={to} children={({ match }) => (
        <li className={match ? 'active' : ''}>
            <Link to={to} children={rest.children}/>
        </li>
    )}/>
  /* jshint ignore:end */
);