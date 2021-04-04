import React from "react";
import {Button, Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {FormField} from "./FormField";
import validator from "../../js/validations";
import {useReduxFormError} from "../hooks";

const formName = "registrationForm";

const validate = (values, info) => {
  const errors = {};
  if (!info.submitting) {
    if (!validator.isValidPassword(values.password)) {
      errors.password = errors.repeatedPassword = 'Пароль слишком лёгкий';
    } else if (values.password !== values.repeatedPassword) {
      errors.repeatedPassword = 'Пароли не совпадают';
    }
    if (!validator.isValidEmail(values.email)) {
      errors.email = 'Некорректный адрес почты';
    }
    if (!validator.isNotEmpty(values.name)) {
      errors.name = 'Не должно быть пустым';
    }
    if (!validator.isNotEmpty(values.lastname)) {
      errors.lastname = 'Не должно быть пустым';
    }
    if (!validator.isNotEmpty(values.phone)) {
      errors.phone = 'Не должно быть пустым';
    }
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
    ["repeatedPassword", "password", "Подтвердите пароль"]
  ];

  return (
    <Form onSubmit={handleSubmit} className={className}>
      {fieldData.map(info => <Field component={FormField} name={info[0]} type={info[1]}
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