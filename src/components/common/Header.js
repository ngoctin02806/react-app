import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import '../../styles/Header.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" className="shadow-sm" light expand="md">
        <NavbarBrand tag="div" href="/">
          Reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Trang chủ
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Action
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink className="nav-link p-0" to="/tao-danh-muc">
                    Tạo danh mục
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/dang-nhap">
                Đăng nhập
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/dang-ki">
                Đăng kí
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
