import React, {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import UsersTable from "../components/UsersTable/UsersTable";
import UserService from "../../../../js/services/UserControlService";

function UsersControl() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadData = async (p) => {
    setLoading(true);
    const result = await UserService.loadUsersPage(p);
    setData(result);
    setLoading(false);
  }

  const onSelectPage = (page) => setPage(page);

  useEffect(() => {
    loadData(page).catch(console.log)
  }, [page])

  return (
    <div className="content">
      <Container fluid>
        <Row>
          <UsersTable info={data} onSelectPage={onSelectPage} loading={loading} />
        </Row>
      </Container>
    </div>
  )
}

export default UsersControl;