import React from 'react';
import './TopNavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
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
                <Nav.Link className="custom_nav_items" to="/" >Insights</Nav.Link>
              </Nav.Item>
              <Nav.Link className="text-primary custom_nav_items" to="/features"></Nav.Link>
              <NavDropdown title="Innovation Labs" id="collasible-nav-dropdown1">
                <NavDropdown.Item className="text-primary" target="_target" to="/research">Research & Development</NavDropdown.Item>
                <NavDropdown.Item className="text-primary" target="_target" to="/productdev">Product Development</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-primary custom_nav_items" to="/features1"></Nav.Link>
              <NavDropdown title="Learning" id="collasible-nav-dropdown2">
                <NavDropdown.Item className="text-primary" target="_blank" href="https://hashcodejr.lejhro.com">HashCode JR</NavDropdown.Item>
                <NavDropdown.Item className="text-primary" target="_blank" href="https://tensor.lejhro.com">Lejhro Tensor</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-primary custom_nav_items" href="#features1"></Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown2">
                <NavDropdown.Item className="text-primary" target="_target"  to="/consulting">Consulting</NavDropdown.Item>
                <NavDropdown.Item className="text-primary" target="_target" to="/outsourcing">Outsourcing</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="custom_nav_items" target="_self" to="/about">About Lejhro
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNavbar;
