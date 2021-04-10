import React from "react";
import Link from "../components/Link";
import ModalLoginButton from "../shared/ModalLoginButton";
import {Nav, Navbar} from "react-bootstrap";
import {useAuth} from "../hooks";
import Private from "../shared/Private";
import {Roles} from "../../js/Roles";

function FixedNavbar() {
  const auth = useAuth();

  const profile = auth.authenticated ? <Nav.Link as={Link} to={"/profile"}>Профиль</Nav.Link>
    : <Nav.Link as={Link} to={"/login"}>Регистрация</Nav.Link>;

  return (
    <Navbar className="fixed-top scrolling-navbar" expand="lg" bg="light">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/" href="/">Главная<span className="sr-only">(current)</span></Nav.Link>
          {/* TODO: directly link for reset SPA styles (maybe find another solutions) */}
          <Private aRole={Roles.ADMIN}>
            <Nav.Link href="/admin">Администрация</Nav.Link>
          </Private>
          <Nav.Link as={Link} to="/courses/list" href="/courses/list">Курсы</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {profile}
          <Nav.Item><ModalLoginButton /></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default FixedNavbar;