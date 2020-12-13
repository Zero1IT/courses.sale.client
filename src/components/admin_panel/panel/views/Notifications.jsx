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

import Button from "../components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
              <p className="category">
                Handcrafted by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/igorprado"
                >
                  Igor Prado
                </a>
                . Please checkout the{" "}
                <a
                  href="http://igorprado.com/react-notification-system/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  full documentation.
                </a>
              </p>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-6">
                  <h5>Notifications Style</h5>
                  <div className="alert alert-info">
                    <span>This is a plain notification</span>
                  </div>
                  <div className="alert alert-info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>This is a notification with close button.</span>
                  </div>
                  <div className="alert alert-info alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </div>
                  <div className="alert alert-info alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Notification states</h5>
                  <div className="alert alert-info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Info - </b> This is a regular notification made with
                      bsStyle="info"
                    </span>
                  </div>
                  <div className="alert alert-success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> This is a regular notification made
                      with bsStyle="success"
                    </span>
                  </div>
                  <div className="alert alert-warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b> This is a regular notification made
                      with bsStyle="warning"
                    </span>
                  </div>
                  <div className="alert alert-danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Danger - </b> This is a regular notification made with
                      bsStyle="danger"
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="places-buttons">
                <div className="row">
                  <div className="col-md-6 text-center offset-md-3">
                    <h5>
                      Notifications Places
                      <p className="category">Click to view notifications</p>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 offset-md-3">
                    <Button
                      className="btn btn-default"
                      block
                      onClick={() => this.props.handleClick("tl")}
                    >
                      Top Left
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                      className="btn btn-default"
                      block
                      onClick={() => this.props.handleClick("tc")}
                    >
                      Top Center
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                      className="btn btn-default"
                      block
                      onClick={() => this.props.handleClick("tr")}
                    >
                      Top Right
                    </Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 offset-md-3">
                    <Button
                      className="btn btn-default"
                      block
                      onClick={() => this.props.handleClick("bl")}
                    >
                      Bottom Left
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                      className="btn btn-default"
                      block
                      onClick={() => this.props.handleClick("bc")}
                    >
                      Bottom Center
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button
                      className="btn btn-default"
                      block
                      onClick={() => this.props.handleClick("br")}
                    >
                      Bottom Right
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
