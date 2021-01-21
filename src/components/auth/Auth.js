import React from "react";
import AuthenticationContext from "./AuthenticationContext";

class Auth extends React.Component {

  state = {
    authenticated: false,
    user: {},
    accessToken: ""
  }

  initiateLogin = () => {

  }

  render() {
    const authValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
    }

    return (
      <AuthenticationContext.Provider value={authValue}>
        {this.props.children}
      </AuthenticationContext.Provider>
    )
  }
}

export default Auth;