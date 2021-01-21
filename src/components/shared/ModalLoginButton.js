import React, {useContext, useState} from "react";
import AuthenticationContext from "../auth/AuthenticationContext";
import ModalPortal from "./ModalPortal";
import {ModalWindow} from "./ModalWindow";
import LoginForm from "./LoginForm";
import CircleLoader from "./CircleLoader";

function ModalLoginButton() {
  const authContext = useContext(AuthenticationContext);
  const [wait, setWait] = useState(false);

  const doAuthentication = async (data) => {
    if (!wait) {
      setWait(true);
      const info = await authContext.initiateLogin(data);
      setWait(false);
    }
  }

  return (
    <>
      <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#doby">
        {authContext.authenticated ? "Log out" : "Log in"}
      </button>
      <ModalPortal>
        <ModalWindow id={"doby"} title={"Login form"}>
          { wait ? <CircleLoader small noBg /> : <LoginForm onSubmit={doAuthentication}/> }
        </ModalWindow>
      </ModalPortal>
    </>
  )
}

export default ModalLoginButton;