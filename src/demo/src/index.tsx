import React from 'react';
import { render } from 'react-dom';
import Demo from './Demo';
import '../../css/animations.css';

render(
  <React.StrictMode><Demo /></React.StrictMode>,
  document.getElementById('content')
);
