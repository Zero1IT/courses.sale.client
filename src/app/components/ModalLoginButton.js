import React, {useState} from "react";
import ModalWindow from "./ModalWindow";
import LoginForm from "./LoginForm";
import {CircleLoader} from "./Loaders";
import {Button} from "react-bootstrap";
import ModalConfirm from "./ModalConfirm";
import {useAuth} from "../hooks";
import {useDispatch} from "react-redux";
import {storeLogout} from "../storage/actions";

function ModalLoginButton({simple}) {
  const dispatch = useDispatch();
  const authContext = useAuth();
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
    dispatch(storeLogout());
    onHide();
  }

  return (
    <>
      {
        simple ? (<span onClick={onOpen}>{authContext.authenticated ? "Выйти" : "Войти"}</span>) : (
          <Button variant="outline-info" onClick={onOpen}>
            { authContext.authenticated ? "Выйти" : "Войти" }
          </Button>
        )
      }

      {
        authContext.authenticated ? (
            <ModalConfirm show={opened} onConfirm={doLogout} onDismiss={onHide} head="Выход из аккаунта" />
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