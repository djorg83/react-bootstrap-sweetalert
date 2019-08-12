import React from 'react';
import {contentContainer as contentConainerStyle} from "../styles/SweetAlertStyles";

const Content: React.FunctionComponent = ({ children }) => (
  <div className="text-muted lead" style={contentConainerStyle}>
      {children}
  </div>
);

export default Content;