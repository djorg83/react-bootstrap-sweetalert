import React from 'react';

const Content: React.FunctionComponent = ({ children }) => (
  <div className="text-muted lead">
      {children}
  </div>
);

export default Content;