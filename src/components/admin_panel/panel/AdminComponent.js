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
import React from "react";

import "./assets/css/animate.min.css";
import "./assets/css/light-dashboard-react.css";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/fonts/css/fontawesome.min.css"
import "./assets/css/fonts/css/all.css"

import Admin from "./layouts/Admin";
import {Route} from "react-router-dom";

const AdminComponent = () => (
  <Route path="/admin" component={Admin} />
);

export default AdminComponent;