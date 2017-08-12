import React from 'react';

// IMPORTANT
// this should be replaced with proper code highlighting
// http://prismjs.com and https://highlightjs.org
const Code = ({ children, language, ...rest }) =>
  <pre className={`language-${language}`}>
    <code {...rest}>
      {children}
    </code>
  </pre>;
export default Code;
