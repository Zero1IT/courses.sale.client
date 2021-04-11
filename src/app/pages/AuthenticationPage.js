import React, {useCallback, useState} from "react";
import {Container, Row} from "react-bootstrap";
import DefaultRegistrationHandler from "../components/DefaultRegistrationHandler";
import ModalWindow from "../components/ModalWindow";
import {useLocation} from "react-router-dom";

function AuthenticationPage() {
  const {state} = useLocation();
  const [success, setSuccess] = useState(state?.successEmail);

  const onSuccess = useCallback(email => {
    setSuccess(email);
  }, []);

  const onHideSuccessWindow = useCallback(() => {
    setSuccess(null);
  }, []);

  return (
    <Container>
      <Row>
        <DefaultRegistrationHandler className="col-md-6 offset-md-3 mt-5" onRegistered={onSuccess} />
        {success && <ModalWindow title="Регистрация прошла успешно" size="lg" show={!!success} onHide={onHideSuccessWindow}>
          <p>
            Регистрация завершена, для того чтобы использовать аккаунт, <b>необходимо подтвердить электронную почту,
            по ссылке</b>. На вашу почту, указанную при регистрации (<i>{success}</i>) выслано письмо с ссылкой, при
            переходе по которой аккаунт будет активирован и вы сможете войти в свой аккаунт.
          </p>
        </ModalWindow>}
      </Row>
    </Container>
  )
}

export default AuthenticationPage;