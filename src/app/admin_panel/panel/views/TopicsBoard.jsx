import React, {useCallback, useEffect, useState} from "react";
import {Button, Col, Container, FormControl, InputGroup, ListGroup, Row, Tab, Tabs} from "react-bootstrap";
import Paginator from "../../../components/Paginator";
import {useCourseStore} from "../../../hooks";
import {useDispatch} from "react-redux";
import {fetchApprovedTopics, fetchNotApprovedTopics, fetchSkippedTopics} from "../../../storage/async-actions";
import CourseService from "../../../../js/services/CourseService";
import ModalConfirm from "../../../components/ModalConfirm";
import {CircleLoaderSuccess} from "../../../components/Loaders";

function TopicsBoard() {
  const [key, setKey] = useState("approve");
  const dispatch = useDispatch();
  const [creatingTopic, setCreatingTopic] = useState(false);
  const [tag, setTag] = useState("");
  const [loader, setLoader] = useState([false, false]);

  const approvingPage = useCourseStore(it => it.approvingTopics);
  const [approvingPageNumber, setApprovingPageNumber] = useState(1);
  const onSelectApprovingPage = useCallback(setApprovingPageNumber, [setApprovingPageNumber]);

  const skippedPage = useCourseStore(it => it.skippedTopics);
  const [skippedPageNumber, setSkippedPageNumber] = useState(1);
  const onSelectSkippedPage = useCallback(setSkippedPageNumber, [setSkippedPageNumber]);

  const approvedPage = useCourseStore(it => it.approvedTopics);
  const [approvedPageNumber, setApprovedPageNumber] = useState(1);
  const onSelectApprovedPage = useCallback(setApprovedPageNumber, [setApprovedPageNumber]);

  const onSelectKey = useCallback(setKey, [setKey]);

  const onUpdate = useCallback(() => {
    if (key === "approve") {
      dispatch(fetchNotApprovedTopics(approvingPageNumber));
    } else if (key === "skipped") {
      dispatch(fetchSkippedTopics(skippedPageNumber));
    } else {
      dispatch(fetchApprovedTopics(approvedPageNumber));
    }
  }, [key, dispatch, approvingPageNumber, approvedPageNumber, skippedPageNumber]);

  const onChangeTagForm = useCallback(e => {
    setTag(e.target.value);
  }, []);

  const onCreateTopic = useCallback(async () => {
    try {
      setLoader([true, false]);
      await CourseService.createTopic({name: tag});
      dispatch(fetchApprovedTopics(approvedPageNumber));
      setLoader([true, true]);
    } catch (e) {
      // TODO: errors
      setLoader([true, false, true]);
    }

  }, [tag, dispatch, approvedPageNumber]);

  const resetLoader = useCallback(() => {
    setLoader([false, false, false]);
    setCreatingTopic(false);
    setTag("");
  }, []);

  const onDismissCreatingTopic = useCallback(() => {
    setCreatingTopic(false);
  }, []);

  const onShowCreatingTopicWindow = useCallback(() => {
    setCreatingTopic(true);
  }, []);

  useEffect(() => {
    onUpdate();
  }, [onUpdate]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={10}>
          <Tabs activeKey={key} onSelect={onSelectKey}>
            <Tab eventKey="approve" title="Для подтверждения">
              <TopicsCrud data={approvingPage.content} onUpdatePage={onUpdate} approve />
              <Paginator info={approvingPage} onSelect={onSelectApprovingPage} />
            </Tab>
            <Tab eventKey="skipped" title="Замороженные">
              <TopicsCrud data={skippedPage.content} onUpdatePage={onUpdate} />
              <Paginator info={skippedPage} onSelect={onSelectSkippedPage} />
            </Tab>
            <Tab eventKey="approved" title="Подтверждённые">
              <Row>
                {approvedPage.content.map(it => (
                  <Col>
                    <ListGroup.Item key={it.name} md={4}>
                      {it.name}
                    </ListGroup.Item>
                  </Col>
                ))}
                <Col className="text-center">
                  <ListGroup.Item>
                    <Button style={{padding: "0", fontSize: "2rem", border: "transparent"}} onClick={onShowCreatingTopicWindow}>
                      <i className="fas fa-plus-square" />
                    </Button>
                  </ListGroup.Item>
                </Col>
              </Row>
              {approvedPage.content.length === 0 && <h3 className="text-center">Нет подтверждённых</h3>}
              <Paginator info={approvedPage} onSelect={onSelectApprovedPage} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <ModalConfirm show={creatingTopic} onConfirm={onCreateTopic} onDismiss={onDismissCreatingTopic} head="Добавление темы">
        {
          loader[0] ? (
            <div>
              <CircleLoaderSuccess stateArray={loader} onReset={resetLoader} />
            </div>
          ) : (
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>TAG</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={onChangeTagForm} value={tag} />
            </InputGroup>
          )
        }
      </ModalConfirm>
    </Container>
  )
}

function TopicsCrud({data, approve, onUpdatePage}) {
  const approveOrRestore = useCallback(async topic => {
    try {
      if (approve) {
        topic.approved = true;
      } else {
        topic.skipped = false;
      }
      await CourseService.updateTopic(topic);
      onUpdatePage();
    } catch (e) {
      console.log(e); // TODO: exception
    }
  }, [approve, onUpdatePage]);

  const skipOrDelete = useCallback(async topic => {
    try {
      if (approve) {
        topic.skipped = true;
        await CourseService.updateTopic(topic);
      } else {
        await CourseService.deleteTopic(topic.id);
      }
      onUpdatePage();
    } catch (e) {
      console.log(e); // TODO: exception
    }
  }, [approve, onUpdatePage]);

  return (
    <ListGroup variant="flush">
      {data.map(it => (
        <ListGroup.Item key={it.name}>
          <Row noGutters>
            <Col>{it.name}</Col>
            <Col><Button variant="success" onClick={() => approveOrRestore(it)}>{approve ? "Подтвердить" : "Восстановить"}</Button></Col>
            <Col><Button variant="warning" onClick={() => skipOrDelete(it)}>{approve ? "Просмотрено" : "Удалить"}</Button></Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TopicsBoard;