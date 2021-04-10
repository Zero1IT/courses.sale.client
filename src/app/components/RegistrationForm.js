import React from "react";
import {Button, Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {FormField} from "./FormField";
import validator from "../../js/validations";
import {useReduxFormError} from "../hooks";
import {userInfoValidate} from "../../js/redux-form-validators";

const formName = "registrationForm";

const validate = (values, info) => {
  const errors = {};
  if (!info.submitting) {
    if (!validator.isValidPassword(values.password)) {
      errors.password = errors.confirmedPassword = 'Пароль слишком лёгкий';
    } else if (values.password !== values.confirmedPassword) {
      errors.confirmedPassword = 'Пароли не совпадают';
    }
    userInfoValidate(values, errors);
  }
  return errors;
}

function RegistrationForm({className, handleSubmit}) {
  const errorsPresent = useReduxFormError(formName);
  const fieldData = [
    ["name", "text", "Имя"],
    ["lastname", "text", "Фамилия"],
    ["email", "email", "Электронная почта"],
    ["phone", "text", "Номер телефона"],
    ["password", "password", "Пароль"],
    ["confirmedPassword", "password", "Подтвердите пароль"]
  ];

  return (
    <Form onSubmit={handleSubmit} className={className}>
      {fieldData.map((info, i) => <Field key={i} component={FormField} name={info[0]} type={info[1]}
                                    label={info[2]} className={"mb-0"} heightType={"medium"} noLabel/>)
      }
      <Button type="submit" className={errorsPresent && "disabled"}>Зарегистрироваться</Button>
    </Form>
  )
}

export default reduxForm({
  form: formName,
  validate,
})(RegistrationForm);