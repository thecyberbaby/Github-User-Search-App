import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Brand from "../Brand.png";
import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='info' light expand='md'>
      <NavbarBrand>
        <NavLink to='/' tag={Link} className='text-dark font-weight-bold ml-2'>
          <img src={Brand} height='30' width='50' alt='loading error' />
          Github App
        </NavLink>
      </NavbarBrand>
      <NavbarText className='text-white'>
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => {
                  context.setUser(null);
                }}
                className='text-white mr-5 pr-5'>
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to='/signup' className='text-white'>
                  Signup
                </NavLink>
              </NavItem>
              <NavItem className='mr-5 pr-5'>
                <NavLink tag={Link} to='/signin' className='text-white'>
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
