import validator from "./validations";

function userInfoValidate(values, errors) {
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

export {
  userInfoValidate
}