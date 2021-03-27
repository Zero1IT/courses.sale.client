import React, {useState} from "react";
import mValidators from "../../js/validations"
import {Form, InputGroup} from "react-bootstrap";

function EmailField() {
  const [email, setEmail] = useState("");

  const onChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Form.Group>
      <InputGroup className="has-validation">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control isInvalid={email && !mValidators.isValidEmail(email)} isValid={email && mValidators.isValidEmail(email)}
                      type="text" id="mail" value={email} onChange={onChange} placeholder="Электронная почта" />
        <Form.Control.Feedback type={"invalid"}>Некорректный Email</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  )
}

export default EmailField;