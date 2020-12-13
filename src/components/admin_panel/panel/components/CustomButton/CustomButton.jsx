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
import cx from "classnames";

class CustomButton extends Component {
  render() {
    const { fill, simple, pullRight, round, block, className, children, ...rest } = this.props;

    const btnClasses = cx({
      "btn-fill": fill,
      "btn-simple": simple,
      "float-right": pullRight,
      "btn-block": block,
      "btn-round": round
    });

    return <button className={[btnClasses, className].join(" ")} {...rest}>{children}</button>;
  }
}

export default CustomButton;
