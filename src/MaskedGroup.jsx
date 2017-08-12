import React from 'react';

const MaskedGroup = ({ maskId, children }) =>
  <g mask={`url(#${maskId})`}>
    {children}
  </g>;

export default MaskedGroup;
