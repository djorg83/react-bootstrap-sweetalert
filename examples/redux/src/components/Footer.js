import React from 'react';
import {Navbar} from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <div className={'text-center'} style={{ width: '100vw', fontSize: 10 }}>
        &copy; example.com {new Date().getFullYear()}
      </div>
    </Navbar>
  );
}

export default Footer;
