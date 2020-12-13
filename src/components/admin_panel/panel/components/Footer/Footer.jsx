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

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            <ul>
              <li>
                <a href="#todo">Home</a>
              </li>
              <li>
                <a href="#todo">Company</a>
              </li>
              <li>
                <a href="#todo">Portfolio</a>
              </li>
              <li>
                <a href="#todo">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright float-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.creative-tim.com?ref=lbr-footer">
              Creative Tim
            </a>, made with love for a better web
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
