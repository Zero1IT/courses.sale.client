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
import { Route, Switch } from "react-router-dom";

import Header from "../components/Navbars/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.jsx";

import routes from "../routes.js";
import image from "../assets/img/sidebar-3.jpg";

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };
    this.mainPanelRef = React.createRef();
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.layout + prop.path}
            render={props => (
              <prop.component {...props} />
            )}
            key={key}
            {...prop.routeProps}
          />
        );
      } else {
        return null;
      }
    });
  };

  getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (this.props.location.pathname.endsWith(routes[i].layout + routes[i].path)) {
        return routes[i].name;
      }
    }
    
    return "Main";
  };

  handleImageClick = image => {
    this.setState({ image: image });
  };

  handleColorClick = color => {
    this.setState({ color: color });
  };

  handleHasImage = hasImage => {
    this.setState({ hasImage: hasImage });
  };

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      window.innerWidth < 993 &&
      prevProps.history.location.pathname !== prevProps.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (prevProps.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanelRef.current.scrollTop = 0;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref={this.mainPanelRef}>
          <Header{...this.props} brandText={this.getBrandText()} />
          <div style={{minHeight: "80vh"}}>
            <Switch>{this.getRoutes(routes)}</Switch>
          </div>
          <Footer />
          <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleHasImage={this.handleHasImage}
            bgColor={this.state["color"]}
            bgImage={this.state["image"]}
            mini={this.state["mini"]}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          />
        </div>
      </div>
    );
  }
}

export default Admin;
