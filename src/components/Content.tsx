import React from 'react';
import {contentContainer as contentContainerStyle} from "../styles/SweetAlertStyles";

const Content: React.FunctionComponent = ({ children }) => (
  <div style={contentContainerStyle}>
      {children}
  </div>
);

export default Content;
