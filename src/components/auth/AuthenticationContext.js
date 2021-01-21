import React from "react";

export default React.createContext({
  authenticated: false,
  user: {},
  accessToken: "",
  initiateLogin: {}
});