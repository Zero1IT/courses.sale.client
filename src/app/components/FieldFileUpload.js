import {Form} from "react-bootstrap";
import React from "react";

function FieldFileUpload({ input: {value: omitValue, ...inputProps }, meta: { valid }}) {
  return (
    <Form.File id="formcheck-api-custom" custom>
      <Form.File.Input {...inputProps} accept=".jpg, .png, .jpeg" /> {/* prop isValid */}
      <Form.File.Label data-browse="Выбрать">{(omitValue[0] || {}).name || "Выберите файл"}</Form.File.Label>
      {/*<Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>*/}
    </Form.File>
  )
}

export default FieldFileUpload;