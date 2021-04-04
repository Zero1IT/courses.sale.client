import React, {useCallback} from "react";
import {Button, Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import FieldFileUpload from "../../components/FieldFileUpload";
import {FormChips, FormField} from "../../components/FormField";
import validator from "../../../js/validations";
import {useReduxFormError} from "../../hooks";

const formName = "courseCreate";

const validate = (values, info) => {
  const errors = {};
  if (!info.submitting) {
    if (!values.title) {
      errors.title = 'Необходимо заполнить';
    } else if (!validator.isNotEmpty(values.title)) {
      errors.title = 'Не должно быть пустым';
    }

    if (!values.cost) {
      errors.cost = 'Необходимо указать';
    } else if (values.cost < 0) {
      errors.cost = 'Не может быть отрицательным';
    }

    if (!values.places) {
      errors.places = 'Необходимо указать';
    } else if (values.places <= 0) {
      errors.places = 'Должно быть больше нуля';
    }

    if (!values.startDate) {
      errors.startDate = 'Необходимо заполнить';
    } else if (new Date(values.startDate) < new Date()) {
      errors.startDate = 'Указанная дата не может быть прошедшей';
    }
  }
  return errors;
}

function CourseCreateForm({handleSubmit}) {
  const errorsPresent = useReduxFormError(formName);

  const onKeyPress = useCallback(e => {
    if (e.key === 'Enter') e.preventDefault();
  }, []);

  return (
    <Form onSubmit={handleSubmit} onKeyPress={onKeyPress}>
      <Form.Row className="align-items-center">
        <Field component={FormField} className="col-12 col-sm-6 col-md-4"
               name="title" type="text" label="Название" heightType="large" />
        <Field component={FormField} className="col-12 col-sm-6 col-md-4" typeParams={{min: 0, step: 0.01}}
               name="cost" type="number" label="Стоимость" heightType="large"/>
        <Field component={FormField} className="col-12 col-sm-6 col-md-4" typeParams={{min: 0, step: 1}}
               name="places" type="number" label="Кол-во мест" heightType="large"/>
      </Form.Row>
      <Form.Row>
        <Field component={FormField} className="col-12 col-sm-6"
               name="startDate" type="datetime-local" label="Дата начала" heightType="large"/>
        <Form.Group className="col-12 col-sm-6">
          <Form.Label>Изображение для карточки курса</Form.Label>
          <Field component={FieldFileUpload} name="image" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Field component={FormChips} className="col-12" name="topics" label="Теги" maxChips={5} />
      </Form.Row>
      <Form.Row>
        <Field component={FormField} className="col-12" formAs="textarea" typeParams={{rows: 3, draggable: false}}
               name="description" label="Описание" />
      </Form.Row>
      <Button type="submit" className={errorsPresent && "disabled"}>Создать</Button>
    </Form>
  )
}

export default reduxForm({
  form: formName,
  destroyOnUnmount: false,
  validate,
})(CourseCreateForm);