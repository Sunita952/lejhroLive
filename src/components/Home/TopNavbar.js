import React from 'react';
import './TopNavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
//import {Nav.Link} from 'react-router-dom';
//import About from './About';

function TopNavbar()
{
    return(
       <Navbar collapseOnSelect className="custom_navbar" expand="sm" bg="light" fixed="top">
          <Navbar.Brand>
            <img
              src={process.env.PUBLIC_URL + "/images/lejhro_new.png"}
              alt="Lejhropic1"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="text-center ml-auto">
            <Nav.Item>
                <Nav.Link className="custom_nav_items" href="/" >Insights</Nav.Link>
              </Nav.Item>
              <Nav.Link className="text-primary custom_nav_items" href="/features"></Nav.Link>
              <NavDropdown title="Innovation Labs" id="collasible-nav-dropdown1">
                <NavDropdown.Item target="_self" href="/research">Research & Development</NavDropdown.Item>
                <NavDropdown.Item target="_self" href="/productdev">Product Development</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-primary custom_nav_items" href="/features1"></Nav.Link>
              <NavDropdown title="Learning" id="collasible-nav-dropdown2">
                <NavDropdown.Item target="_target" href="https://hashcodejr.lejhro.com">HashCode JR</NavDropdown.Item>
                <NavDropdown.Item target="_target" href="https://tensor.lejhro.com">Lejhro Tensor</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="custom_nav_items" href="/features2"></Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown2">
                <NavDropdown.Item target="_self" href="/consulting">Consulting</NavDropdown.Item>
                <NavDropdown.Item target="_self" href="/outsourcing">Outsourcing</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="custom_nav_items" target="_self" href="/about">About Lejhro
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNavbar;
