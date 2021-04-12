import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Button, Card, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useUsersStore} from "../../../hooks";
import {fetchPermissions, fetchRoles} from "../../../storage/async-actions";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";
import {useLocation} from "react-router-dom";
import RoleService from "../../../../js/services/RoleService";
import {CircleLoaderSuccess, CLSLoader3StepHandler} from "../../../components/Loaders";
import {saveRoles} from "../../../storage/actions";
import Selector from "../../../components/Selector";
import ModalConfirm from "../../../components/ModalConfirm";

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
      await CLSLoader3StepHandler(setLoading, async () => {
        const createdRole = await RoleService.createNewRole({name, permissions});
        dispatch(saveRoles([...roles, createdRole]));
      });
      // TODO: handler error
    }
  }, [roles, dispatch])

  const onUpdateRole = useCallback(async (name, permissions) => {
    if (name && permissions && permissions.length > 0) {
      await CLSLoader3StepHandler(setLoading, async () => {
        const updatedRole = await RoleService.updateRole({name, permissions});
        const index = roles.findIndex(it => it.name === updatedRole.name);
        roles[index] = updatedRole;
        dispatch(saveRoles(roles));
      });
      // TODO: handler error
    }
  }, [roles, dispatch]);

  const onDeleteRole = useCallback(async (deletableRoleName, migrationRoleName) => {
    if (deletableRoleName && migrationRoleName && deletableRoleName !== migrationRoleName) {
      await CLSLoader3StepHandler(setLoading, async () => {
        const response = await RoleService.deleteRole(deletableRoleName, migrationRoleName);
        dispatch(saveRoles(roles.filter(it => it.name !== deletableRoleName)));
        console.log(response);
      });
      // TODO: handler error
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
                                 onCreate={onCreateRole} onUpdate={onUpdateRole} onDelete={onDeleteRole} />}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

function RolePermissionPanel({hash, roles, permissions, onCreate, onUpdate, onDelete}) {
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

  const onDeleteRole = useCallback(newRole => {
    onDelete(selectedRole.name, newRole);
  }, [selectedRole?.name, onDelete]);

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
                            onDelete={onDeleteRole}
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

function ExistedRoleView({permissions, hash, rolePermissions, selectedRole, onSelect, onDelete, onUpdate}) {
  const roles = useUsersStore(store => store.roles.map(it => (
    {disabled: it.programmatically || (it.name === selectedRole.name), name: it.name}
    )
  ));
  const [selectedName, setSelectedName] = useState();
  const [roleDialogVisible, setRoleDialogVisible] = useState(false);
  const onApplyDeleting = () => onDelete(selectedName); // use selectedName for provide to parent info about role to migrate

  const onDismissSelectRole = useCallback(() => {
    setRoleDialogVisible(false);
  }, []);

  const onShowSelectRole = useCallback(() => {
    setRoleDialogVisible(true);
  }, []);

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
      {selectedRole.changeable &&
      <Row className="p-2">
        <Col>
          <Button onClick={onUpdate}>Обновить</Button>
        </Col>
        <Col>
          {roles && roles.length && <Button variant="danger" onClick={onShowSelectRole}>Удалить</Button>}
        </Col>
      </Row>
      }
      <ModalConfirm onDismiss={onDismissSelectRole} onConfirm={onApplyDeleting} show={roleDialogVisible} head="Выберите роль">
        <Selector selected={selectedName} onSelect={setSelectedName} data={roles} />
      </ModalConfirm>
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