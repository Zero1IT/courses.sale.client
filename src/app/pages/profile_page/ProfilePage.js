import React, {useEffect, useMemo, useState} from "react";
import {Button, Card, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import ProfileCoursesInfo from "./ProfileCoursesInfo";
import "../../../css/profile.css";
import {useDispatch} from "react-redux";
import {useUsersStore} from "../../hooks";
import {fetchProfile} from "../../storage/actions";
import {Facebook, GitHub, Instagram, Twitter, Website} from "../../components/SvgIcons";
import {Field, reduxForm} from "redux-form";
import {FormField} from "../../components/FormField";
import {userInfoValidate} from "../../../js/redux-form-validators";

const undefinedProperty = 'Не указано';

function fullName(profile) {
  return profile.name || profile.lastname ? `${profile.name} ${profile.lastname}` : null;
}

function ProfilePage() {
  const dispatcher = useDispatch();
  const profile = useUsersStore(store => store.profile);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    dispatcher(fetchProfile());
  }, [dispatcher]);

  const switchEdit = () => setEditable(!editable);

  return (
    <Container className="profile-body">
      <div className="profile-main-body">
        <Row className="gutters-sm">
          <Col className="mb-3" md={4}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                       width="150"/>
                  <div className="mt-3">
                    <h4>Профиль</h4>
                    <p className="text-secondary mb-1">{fullName(profile) || 'Нет имени'}</p>
                    <p className="text-muted font-size-sm">{profile.role?.name}</p>
                    {editable
                      ? <Button variant="outline-danger" onClick={switchEdit}>Отменить</Button>
                      : <Button variant="outline-primary" onClick={switchEdit}>Изменить</Button>
                    }
                  </div>
                </div>
              </div>
            </div>
            <Card className="mt-3">
              <ListGroup className="list-group-flush">
                <ProfileContactItem name="Website" info="https://bootdey.com" children={<Website/>}/>
                <ProfileContactItem name="Github" info="bootdey" children={<GitHub/>}/>
                <ProfileContactItem name="Twitter" info="@bootdey" children={<Twitter/>}/>
                <ProfileContactItem name="Instagram" info="bootdey" children={<Instagram/>}/>
                <ProfileContactItem name="Facebook" info="bootdey" children={<Facebook/>}/>
              </ListGroup>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="mb-3">
              <ProfileInfoBody profile={profile} editable={editable}/>
            </Card>
            <Row className="gutters-sm">
              <Col className="mb-3" sm={12}>
                <Card className="h-100">
                  <Card.Body>
                    <ProfileCoursesInfo/>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

function ProfileInfoBody({profile, editable, submitEdit}) {
  const view = useMemo(() => (
    <Card.Body>
      <ProfileLineInfo info={editable ? profile.name : fullName(profile)} title="Имя" editable={editable} name="name" />
      {editable && <ProfileLineInfo info={profile.lastname} title="Фамилия" editable name="lastname" />}
      <ProfileLineInfo info={profile.email} title="Email" editable={editable} name="email" />
      <ProfileLineInfo info={profile.login} title="Логин" editable={editable} name="login" />
      <ProfileLineInfo info={profile.phone} title="Телефон" editable={editable} name="phone" />
      {!editable && <ProfileLineInfo info={profile.role?.name} title="Роль" noUnderline/>}
    </Card.Body>
  ), [profile, editable]);

  if (editable) {
    return <ProfileEditForm view={view} initialValues={profile} onSubmit={submitEdit} />
  }

  return view;
}

function ProfileLineInfo({info, title, noUnderline, editable, name}) {
  return (
    <>
      <Row>
        <Col sm={3}>
          <h6 className="mb-0">{title}</h6>
        </Col>
        <Col className="text-secondary" sm={9}>
          {editable
            ? <Field component={FormField} name={name} type="text" label={title} heightType="small" noLabel />
            : info || undefinedProperty
          }
        </Col>
      </Row>
      {!noUnderline && !editable && <hr/>}
    </>
  )
}

const validate = (values, info) => {
  const errors = {};
  if (!info.submitting) {
    userInfoValidate(values, errors);
  }
  return errors;
}

const formName = "profileForm";

function ProfileEditView ({handleSubmit, view}) {
  return (
    <Form onSubmit={handleSubmit}>
      {view}
      <Row className="p-1 justify-content-center" noGutters>
        <Button type="submit">Подтвердить изменения</Button>
      </Row>
    </Form>
  )
}

const ProfileEditForm = reduxForm({
  form: formName,
  destroyOnUnmount: true,
  validate
})(ProfileEditView);

function ProfileContactItem({name, info, children}) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
      <h6 className="mb-0">
        {children} {name}
      </h6>
      <span className="text-secondary">{info}</span>
    </ListGroup.Item>
  )
}

export default ProfilePage;