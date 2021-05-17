import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  let token = localStorage.getItem("token")
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="light" light expand="md"  >
        <div className="container">
        <NavbarBrand tag={Link} to="/" style={{padding:'10px'}}>Gnex</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-2" navbar >
            <NavItem>
              <NavLink tag={Link} to="/blog">
                  Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/users">Users</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
          <Nav>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
              
            </NavItem>
            </Nav>
        </Collapse>
    </div>

      </Navbar>
  );
}

export default Header;