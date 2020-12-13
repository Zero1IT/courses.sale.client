/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              <i className="fa fa-dashboard" />
              <p className="d-lg-none d-md-none">Dashboard</p>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="notify-dropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-globe" />
                <b className="caret" />
                <span className="notification">5</span>
                <p className="d-lg-none d-md-none">Notification</p>
            </a>
            <div className="dropdown-menu" aria-labelledby="notify-dropdown">
              <a className="dropdown-item">Notification 1</a>
              <a className="dropdown-item">Notification 2</a>
              <a className="dropdown-item">Notification 3</a>
              <a className="dropdown-item">Notification 4</a>
              <a className="dropdown-item">Another notifications</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fa fa-search" />
              <p className="d-lg-none d-md-none">Search</p>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link">Account</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarRightDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarRightDropdown">
              <a className="dropdown-item" >Action</a>
              <a className="dropdown-item" >Another action</a>
              <a className="dropdown-item" >Something</a>
              <a className="dropdown-item" >Another action</a>
              <a className="dropdown-item" >Something</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" >Separated link</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link">Log out</a>
          </li>
        </ul>
      </>
    );
  }
}

export default AdminNavbarLinks;
