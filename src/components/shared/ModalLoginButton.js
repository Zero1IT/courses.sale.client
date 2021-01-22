import React, {useContext, useState} from "react";
import AuthenticationContext from "../auth/AuthenticationContext";
import ModalWindow from "./ModalWindow";
import LoginForm from "./LoginForm";
import CircleLoader from "./CircleLoader";
import {Button} from "react-bootstrap";
import ModalConfirm from "./ModalConfirm";

function ModalLoginButton() {
  const authContext = useContext(AuthenticationContext);
  const [wait, setWait] = useState(false);
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState({});

  const onOpen = () => setOpened(true);
  const onHide = () => setOpened(false);

  const doAuthentication = async (data) => {
    if (!wait) {
      setMessage(null);
      setWait(true);

      const info = await authContext.initiateLogin(data);
      if (!info.success) {
        setMessage({text: info.panic ? "No request" : `Invalid status ${info.status}`, type: info.panic ? "danger" : "warning"})
      } else {
        onHide();
      }

      setWait(false);
    }
  }

  const doLogout = () => {
    authContext.logout();
    onHide();
  }

  return (
    <>
      <Button variant="outline-info" onClick={onOpen}>
        { authContext.authenticated ? "Log out" : "Log in" }
      </Button>
      {
        authContext.authenticated ? (
            <ModalConfirm show={opened} onConfirm={doLogout} onDismiss={onHide}>
              Выход из аккаунта
            </ModalConfirm>
          ) : (
          <ModalWindow show={opened} onHide={onHide} id={"doby"} title={"Login form"} message={message}>
            { wait ? <CircleLoader small noBg /> : <LoginForm onSubmit={doAuthentication}/> }
          </ModalWindow>
        )
      }
    </>
  )
}

export default ModalLoginButton;