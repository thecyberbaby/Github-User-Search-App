import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag='footer'
      className='text-center bg-info text-white text-uppercase fixed-bottom p-2'>
      Github search app with firebase &copy; 2021 Nishant Sharma
    </Container>
  );
};

export default Footer;
