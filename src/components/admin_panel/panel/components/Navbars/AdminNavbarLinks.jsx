import React, { Component } from "react";
import {Container, Nav, NavDropdown} from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <span className="hidden-lg hidden-md">Notification</span>
      </>
    );
    return (
      <Container>
        <Nav className="mr-auto">
          <Nav.Link>
            <i className="fas fa-tachometer-alt" />
            <span className="hidden-lg hidden-md">Dashboard</span>
          </Nav.Link>
          <NavDropdown title={notification} id="basic-nav-dropdown">
            <NavDropdown.Item eventKey={2.1}>Notification 1</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.2}>Notification 2</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.3}>Notification 3</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.4}>Notification 4</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.5}>Another notifications</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <i className="fa fa-search" />
            <span className="hidden-lg hidden-md">Search</span>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link>
            Account
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown-right">
            <NavDropdown.Item eventKey={2.1}>Action</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.2}>Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.3}>Something</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.4}>Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.5}>Something</NavDropdown.Item>
            <NavDropdown.Item divider />
            <NavDropdown.Item eventKey={2.5}>Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            Log out
          </Nav.Link>
        </Nav>
      </Container>
    );
  }
}

export default AdminNavbarLinks;
