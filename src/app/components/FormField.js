import {Form} from "react-bootstrap";
import React from "react";

const minHeightTypes = new Map();
minHeightTypes.set("small", "55px");
minHeightTypes.set("medium", "75px");
minHeightTypes.set("large", "95px");

function FormField(props) {
  const {input, label, type, noLabel, typeParams, heightType,
    meta: { invalid, error, valid, touched, visited }, className, flcn, formAs} = props;

  return (
    <Form.Group className={className} style={heightType && {minHeight: minHeightTypes.get(heightType)}}>
      {!noLabel && <Form.Label className={flcn}>{label}</Form.Label>}
      <Form.Control {...input} type={type} {...typeParams} placeholder={label}
                    as={formAs} isValid={(visited || touched) && valid} isInvalid={(visited || touched) && invalid} />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormField;