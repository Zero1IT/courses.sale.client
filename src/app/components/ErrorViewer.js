import React from "react";
import {Container} from "react-bootstrap";

function ErrorViewer({error, repeat}) {
  if (error.panic) {
    return (
      <Container>
        <h1>Неизвестная ошибка, проверьте подключение к интернету</h1>
      </Container>
    )
  } else {
    if (error.status === 400) {

    }
    return <h3>EV: {JSON.stringify(error)}</h3>
  }
}

export default ErrorViewer;