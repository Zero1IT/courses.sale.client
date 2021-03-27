import React, {useCallback, useState} from "react";
import CourseCreateForm from "./CourseCreateForm";
import {SubmissionError} from "redux-form";
import {Container} from "react-bootstrap";
import CourseService from "../../../js/services/CourseService";
import CircleLoader from "../../shared/CircleLoader";

function CourseCreationPage() {
  const [creating, setCreating] = useState(false);

  const submitCreate = useCallback(async (values, _, form) => {
    try {
      setCreating(true);
      const course = Object.assign({}, values);
      course.startDate = new Date(course.startDate ?? null).toISOString();
      await CourseService.createCourses(course);
      form.destroy();
    } catch (e) {
      throw new SubmissionError(e.response?.fieldMessage || {});
    } finally {
      setCreating(false);
    }
  }, []);

  return (
    <Container>
      <h1 className="text-center">Создание нового курса</h1>
      {creating ? <CircleLoader noBg /> : <CourseCreateForm onSubmit={submitCreate} />}
    </Container>
  )
}

export default CourseCreationPage;