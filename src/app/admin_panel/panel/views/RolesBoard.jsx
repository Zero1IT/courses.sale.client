import React, {useEffect} from "react";
import {Accordion, Button, Card, Col, Container, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useUsersStore} from "../../../hooks";
import {fetchRoles} from "../../../storage/actions";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";

function RolesBoard() {
  const dispatch = useDispatch();
  const roles = useUsersStore(store => store.roles);

  useEffect(() => {
    dispatch(fetchRoles());
  });

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} sm={10}>
          <Accordion>
          {roles.map((role, index) => (
            <Card key={index}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index+1}>
                  {role.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index+1}>
                <Card.Body>
                  {role.permissions.map(it => (
                    <CheckboxPermission name={it.name} disabled={role.changable} />
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

function CheckboxPermission({name, disabled, ...rest}) {
  return (
    <Col {...rest}>
      <CustomCheckbox id={name} label={name} disabled={disabled} />
    </Col>
  )
}

export default RolesBoard;