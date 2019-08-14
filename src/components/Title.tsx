import React  from 'react';
import { title as titleStyle } from "../styles/SweetAlertStyles";

const Title: React.FunctionComponent = ({ children }) => <h2 style={titleStyle}>{children}</h2>;

export default Title;
