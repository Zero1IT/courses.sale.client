import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Button, Card, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useUsersStore} from "../../../hooks";
import {fetchPermissions, fetchRoles} from "../../../storage/async-actions";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";
import {useLocation} from "react-router-dom";
import RoleService from "../../../../js/services/RoleService";
import {CircleLoaderSuccess} from "../../../components/Loaders";
import {saveRoles} from "../../../storage/actions";

function RolesBoard() {
  const dispatch = useDispatch();
  const roles = useUsersStore(store => store.roles);
  const permissions = useUsersStore(store => store.permissions);
  const {hash} = useLocation();
  const [loading, setLoading] = useState([false, false]);

  useEffect(() => {
    dispatch(fetchRoles());
    dispatch(fetchPermissions());
  });

  const resetLoading = useCallback(() => {
    setLoading([false, false, false]);
  }, []);

  const onCreateRole = useCallback(async (name, permissions) => {
    if (name && permissions && permissions.length > 0) {
      try {
        setLoading([true, false]);
        const createdRole = await RoleService.createNewRole({
          name, permissions
        });
        dispatch(saveRoles([...roles, createdRole]));
        setLoading([true, true]);
      } catch (e) {
        // TODO: exceptions
        setLoading([true, false, true]);
      }
    }
  }, [roles, dispatch])

  const onUpdateRole = useCallback(async (name, permissions) => {
    if (name && permissions && permissions.length > 0) {
      try {
        setLoading([true, false]);
        const updatedRole = await RoleService.updateRole({
          name, permissions
        });
        const index = roles.findIndex(it => it.name === updatedRole.name);
        roles[index] = updatedRole;
        dispatch(saveRoles(roles));
        setLoading([true, true]);
      } catch (e) {
        // TODO: exceptions
        setLoading([true, false, true])
      }
    }
  }, [roles, dispatch]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush" activeKey={hash}>
            <ListGroup.Item action href="#create" variant={"primary"} active={hash.substring(1)==="create"}>
              <Row noGutters>
                <Col sm={11}>Создать</Col>
                <Col>
                  <i className="fas fa-plus-circle" />
                </Col>
              </Row>
            </ListGroup.Item>
            {roles.map((it, i) => <ListGroup.Item action href={`#${it.name}`} key={i}>{it.name}</ListGroup.Item>)}
          </ListGroup>
        </Col>
        <Col md={8} sm={11}>
          <Card>
            {loading[0] ? <Row className="justify-content-center p-5">
              <CircleLoaderSuccess onReset={resetLoading} stateArray={loading} />
            </Row> :
            <RolePermissionPanel roles={roles} permissions={permissions} hash={hash}
                                 onCreate={onCreateRole} onUpdate={onUpdateRole} />}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

function RolePermissionPanel({hash, roles, permissions, onCreate, onUpdate}) {
  const name = hash.substring(1);
  const selectedRole = useMemo(() => roles.find(it => it.name === name), [name, roles]);
  const rolePermissions = useMemo(() => selectedRole?.permissions?.map(it => it.name), [selectedRole]);
  const [existsRolePermissions, setExistsRolePermissions] = useState(rolePermissions);
  const [newPermissions, setNewPermissions] = useState([]);
  const [newRoleName, setNewRoleName] = useState("");

  useEffect(() => {
    setExistsRolePermissions(rolePermissions);
  }, [rolePermissions]);

  const onChangeRolePermissions = useCallback((perm, add) => {
    if (add) {
      setExistsRolePermissions(prev => [...prev, perm]);
    } else {
      setExistsRolePermissions(prev => prev.filter(it => it !== perm));
    }
  }, []);

  const onUpdateRole = useCallback(() => {
    onUpdate(selectedRole.name, existsRolePermissions);
  }, [selectedRole?.name, existsRolePermissions, onUpdate]);

  const onSelectNewRolePermission = useCallback((perm, add) => {
    if (add) {
      setNewPermissions(prev => [...prev, perm]);
    } else {
      setNewPermissions(prev => prev.filter(it => it !== perm));
    }
  }, []);

  const onCreateNewRole = useCallback(() => {
    onCreate(newRoleName, newPermissions);
  }, [newRoleName, newPermissions, onCreate]);

  const onChangeNewRoleName = useCallback(v => setNewRoleName(v), []);

  if (rolePermissions) {
    return <ExistedRoleView hash={hash}
                            permissions={permissions}
                            rolePermissions={rolePermissions}
                            selectedRole={selectedRole}
                            onSelect={onChangeRolePermissions}
                            onUpdate={onUpdateRole} />;
  }

  return <CreateRoleView hash={hash}
                         permissions={permissions}
                         selectedDefault={newPermissions}
                         onSelect={onSelectNewRolePermission}
                         onCreate={onCreateNewRole}
                         nameDefault={newRoleName}
                         onChangeName={onChangeNewRoleName} />
}

function ExistedRoleView({permissions, hash, rolePermissions, selectedRole, onSelect, onUpdate}) {
  return (
    <Container>
      <Row className="p-2">
        {permissions.filter(it => it !== "ALL").map((it, i) => (
          <Col key={hash+i} md={4}>
            <CustomCheckbox number={"p"+i} label={it}
                            isChecked={rolePermissions.includes(it)}
                            disabled={!selectedRole.changeable}
                            onChange={v => onSelect(it, v)} />
          </Col>
        ))}
      </Row>
      <Row className="p-2">
        <Col>
          <Button onClick={onUpdate}>Обновить</Button>
        </Col>
      </Row>
    </Container>
  )
}

function CreateRoleView({permissions, hash, onSelect, selectedDefault, nameDefault, onCreate, onChangeName}) {

  const onChange = useCallback(e => {
    onChangeName(e.target.value);
  }, [onChangeName]);

  return (
    <Container>
      <Row className="p-2">
        <Col sm={12}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Название роли</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={onChange} value={nameDefault} />
          </InputGroup>
        </Col>
        <Col sm={12}>
          <Row className="mt-4">
            {permissions.filter(it => it !== "ALL").map((it, i) => (
              <Col key={hash+i} md={4}>
                <CustomCheckbox number={"p"+i} label={it} onChange={v => onSelect(it, v)}
                                isChecked={selectedDefault.includes(it)} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="p-2">
        <Col>
          <Button onClick={onCreate}>Создать</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RolesBoard;