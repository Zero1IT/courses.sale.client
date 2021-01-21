import React from "react";
import AuthenticationContext from "./AuthenticationContext";
import api from "../../js/api";

class Auth extends React.Component {

  state = {
    authenticated: false,
    user: {},
    accessToken: ""
  }

  initiateLogin = async (data) => {
    if (data.email && data.password) {
      try {
        const response = await api("auth/login", {
          method: 'post', body: JSON.stringify(data)
        })
        if (response.ok) {
          const json = await response.json();
          this.setSession(json.access);
          localStorage.setItem("TOKEN", json.refresh);
          return {
            success: true
          };
        }
        return {
          success: false,
          status: response.status
        }
      } catch (e) {
        return {
          success: false,
          panic: true
        }
      }
    }
  }

  setSession = (access) => {
    const data = JSON.parse(atob(access.split('.')[1]));
    const user = {
      id: data.id,
      role: data.role,
      email: data.email
    }

    this.setState({
      authenticated: true,
      accessToken: access,
      user
    })
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