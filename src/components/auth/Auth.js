import React from "react";
import AuthenticationContext from "./AuthenticationContext";
import authService from "../../services/AuthService"

class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.parseToken(this.props.access) || {
      authenticated: false,
      user: {},
      accessToken: ""
    }
  }

  tryLogin = async () => {
    const access = await authService.tryLogin();
    if (access) {
      this.setSession(access);
      return true;
    }
    return false;
  }

  initiateLogin = async (data) => {
    const [access, result] = await authService.initiateLogin(data);
    if (result.success) {
      this.setSession(access);
    }
    return result;
  }

  setSession = (access) => {
    const data = this.parseToken(access);
    if (data) {
      this.setState(data);
    }
  }

  parseToken(access) {
    try {
      if (access) {
        const data = JSON.parse(atob(access.split('.')[1]));

        if (data) {
          return {
            authenticated: true,
            accessToken: access,
            user: {
              id: data.id,
              role: data.role,
              email: data.email
            }
          }
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  logout = () => {

  }

  render() {
    const authValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      logout: this.logout,
      tryLogin: this.tryLogin
    }

    return (
      <AuthenticationContext.Provider value={authValue}>
        {this.props.children}
      </AuthenticationContext.Provider>
    )
  }
}

export default Auth;