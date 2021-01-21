import React, {useContext} from "react";
import Link from "../shared/Link";
import AuthenticationContext from "../auth/AuthenticationContext";
import ModalPortal from "../shared/ModalPortal";
import {ModalWindow, WINDOW_TYPE} from "../shared/ModalWindow";
import LoginForm from "../shared/LoginForm";

function Navbar() {
  const authContext = useContext(AuthenticationContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top scrolling-navbar">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Главная<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            {/* TODO: directly link for reset SPA styles (maybe find another solutions) */}
            <a className="nav-link" href="/admin">Администрация</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Курсы</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#doby">
              {authContext.authenticated ? "Log out" : "Log in"}
            </button>
            <ModalPortal>
              <ModalWindow id={"doby"} title={"Login form"}>
                <LoginForm onSubmit={authContext.initiateLogin}/>
              </ModalWindow>
            </ModalPortal>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;