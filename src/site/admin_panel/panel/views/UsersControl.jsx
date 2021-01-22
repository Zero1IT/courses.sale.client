import React, {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import UsersTable from "../components/UsersTable/UsersTable";
import UserService from "../../../../js/services/UserService";

function UsersControl() {
  const [data, setData] = useState();

  useEffect(() => {
    UserService.loadUsers(1, {what: 202, toke: 3030})
      .then(setData);
  }, [])

  return (
    <div className="content">
      <Container fluid>
        <Row>
          <UsersTable data={data} />
        </Row>
      </Container>
    </div>
  )
}

export default UsersControl;