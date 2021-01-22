import React from "react";
import Link from "../shared/Link";
import ModalLoginButton from "../shared/ModalLoginButton";

function Navbar() {
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
            <ModalLoginButton />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;