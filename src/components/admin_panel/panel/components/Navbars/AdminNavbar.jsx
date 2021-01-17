import React, { Component } from "react";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import Link from "../../../../root/Link";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    const node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg p-0 navbar-light bg-light nav-open">
        <Link className="navbar-brand m-0" to="/admin">{this.props.brandText}</Link>
        <button className="navbar-toggle collapse" type="button" onClick={this.mobileSidebarToggle}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <div className="navbar-collapse collapse">
          <AdminNavbarLinks />
        </div>
      </nav>
    );
  }
}

export default Header;
