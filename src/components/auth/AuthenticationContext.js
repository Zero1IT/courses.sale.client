import React from "react";

export default React.createContext({
  authenticated: false,
  user: {},
  accessToken: "",
  initiateLogin: async () => { throw new Error('Need to be override') },
  logout: () => { throw new Error('Need to be override') },
});