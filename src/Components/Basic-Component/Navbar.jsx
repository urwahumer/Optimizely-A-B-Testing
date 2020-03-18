import React, { useState, useContext } from "react";
import { Cart_context } from "../../Pages/CartContext";
import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const HeaderNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [CartItem, setCartItem] = useContext(Cart_context);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-3">
          {" "}
          <Link className="navbar-brand mr-auto" to="/">
            <p className="nav-logo font-weight-bold">Rushmore</p>
          </Link>
        </NavbarBrand>
        {/* <NavLink>
          <Link className="nav-link " to="/Cart">
            <span>
              <i className="fas fa-shopping-cart notification ">
                <span className="badge ">{CartItem.length}</span>
              </i>
            </span>
          </Link>
        </NavLink> */}

        <Collapse isOpen={isOpen} navbar className="">
          <Nav className="text-center ml-auto " navbar>
            <NavItem>
              <NavLink className="ml-auto">
                {" "}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <Link className="nav-dropdown " to="/">
                      Home
                    </Link>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      {" "}
                      <Link className="nav-dropdown" to="/">
                        Home Default
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <Link className="nav-dropdown" to="/">
                        Home New Fashion
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <Link className="nav-dropdown" to="/">
                        Home Modren
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      {" "}
                      <Link className="nav-dropdown" to="/">
                        Home Classic
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="">
                <Link className="nav-link" to="/Men">
                  Men
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="">
                <Link className="nav-link" to="/Women">
                  Women
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="">
                <Link className="nav-link" to="/ContactUs">
                  ContactUs
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="">
                {" "}
                <Link className="nav-link" to="/AboutUs">
                  AboutUs
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className=""></NavItem>
          </Nav>
        </Collapse>

        <i className="fas fa-search"></i>

        <Link className="nav-link " to="/Cart">
          <span>
            <i className="fas fa-shopping-cart notification ">
              <span className="badge ">{CartItem.length}</span>
            </i>
          </span>
        </Link>

        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
