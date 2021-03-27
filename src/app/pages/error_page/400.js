import React from "react";
import {Button, Container} from "react-bootstrap";

function Error400({close}) {
  return (
    <Container>
      <h1>400</h1>
      <h2>Неверный запрос</h2>
      <Button variant="outline-primary" onClick={close}>Повторить</Button>
    </Container>
  )
}

export default Error400;