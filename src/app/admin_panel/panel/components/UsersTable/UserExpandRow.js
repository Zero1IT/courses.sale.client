import React, {useState} from "react";
import {Accordion, Badge, Container, ListGroup} from "react-bootstrap";
import Button from "../CustomButton/CustomButton";
import ModalConfirm from "../../../../components/ModalConfirm";
import Selector from "../../../../components/Selector";
import UserService from "../../../../../js/services/UserControlService";
import {roleChangingLoader} from "../../../../storage/actions";
import {useDispatch} from "react-redux";

/**
 * @param data - user
 * @param roles - items for Selector
 * @return {JSX.Element}
 * @constructor
 */
function UserExpandRow({data, roles}) {
  const dispatch = useDispatch();
  const [roleDialogVisible, setRoleDialogVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(data.role.name);

  const onSelectRole = (role) => setSelectedRole(role);
  const onChangeRole = () => setRoleDialogVisible(true);

  const dismissChangeRole = () => {
    setRoleDialogVisible(false);
    setSelectedRole(data.role.name);
  }

  const changeRole = () => {
    if (selectedRole !== data.role.name) {
      dispatch(roleChangingLoader(true));
      UserService.changeRole({userId: data.id, newRoleName: selectedRole})
        .finally(() => dispatch(roleChangingLoader(false)));
    }
    setRoleDialogVisible(false);
  }

  return (
    <Container>
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item as="li">
          {
            data.confirmed ? (<p>Почта подтверждена/аккаунт активирован <i className="fa fa-check text-success" /></p>
            ) : (<p>Почта не подтверждена <i className="fa fa-times text-danger" /></p>)
          }
        </ListGroup.Item>
        <ListGroup.Item as="li">
          {
            data.login ? (<p>Логин пользователя: {data.login}</p>) : (<p>Логин отсутствует</p>)
          }
        </ListGroup.Item>
        <ListGroup.Item as="li">
          {
            data.role.permissions.length === 0 ?
              (<p>У пользователя отсутствуют разрешения. Пока почта не подтверждена, нельзя изменять права</p>) : (
              <Accordion>
                <Accordion.Toggle eventKey="0" as={Button}>
                  Разрешения пользователя
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup>
                    {data.role.permissions.map((it, i) => <ListGroup.Item key={i}><Badge>{it.name}</Badge>
                      <Button variant="danger" simple type="button" size="sm">
                        <i className="fa fa-times" />
                      </Button>
                    </ListGroup.Item>
                    )}
                    <ListGroup.Item><Button variant="danger" onClick={onChangeRole}>Изменить права</Button></ListGroup.Item>
                    <ModalConfirm onDismiss={dismissChangeRole} onConfirm={changeRole} show={roleDialogVisible}
                                  body={<Selector selected={selectedRole} onSelect={onSelectRole} data={roles} initial={data.role.name} />}>
                      Выберите роль
                    </ModalConfirm>
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>
            )
          }
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default UserExpandRow;