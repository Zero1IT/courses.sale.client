import React, {useCallback, useMemo} from "react";
import {Container, Form, InputGroup} from "react-bootstrap";
import IconChangeableButton from "../../components/IconChangeableButton";

function CourseFilter() {
  const costIcons = useMemo(() => [
    <i className="fas fa-less-than" />,
    <i className="fas fa-equals" />,
    <i className="fas fa-greater-than" />
  ], []);
  const iconChangedCallback = useCallback(selectedIcon => {
    console.log(selectedIcon);
  }, []);


  return (
    <Container as="section" className="mt-2">
      <h5 className="text-center">Используйте фильтры для лучшего поиска</h5>
      <Form>
        <Form.Row>
          <Form.Group className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Form.Label>Курс</Form.Label>
            <Form.Control type="text" placeholder="Название курса" />
          </Form.Group>
          <Form.Group className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Form.Label>Лектор</Form.Label>
            <Form.Control type="text" placeholder="Имя лектора" />
          </Form.Group>
          <Form.Group className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Form.Label>Дата начала</Form.Label>
            <Form.Control type="datetime-local" placeholder="Дата начала" />
          </Form.Group>
          <Form.Group className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Form.Label>Стоимость</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>BYN</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="number" min="0" step="0.01" placeholder="Стомость BYN" />
              <InputGroup.Append>
                <IconChangeableButton variant="outline-info" icons={costIcons} selectedIconCallback={iconChangedCallback} />
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  )
}

export default CourseFilter;