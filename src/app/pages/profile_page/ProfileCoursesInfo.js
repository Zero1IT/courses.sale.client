import React, {useCallback, useEffect, useState} from "react";
import {Container, Tab, Tabs} from "react-bootstrap";
import OwnedCoursesList from "./OwnedCoursesList";
import EnrolledCoursesList from "./EnrolledCoursesList";
import {useDispatch} from "react-redux";
import {fetchEnrolledCourses, fetchOwnedCourses} from "../../storage/async-actions";
import {useCourseStore} from "../../hooks";
import Paginator from "../../components/Paginator";

function ProfileCoursesInfo() {
  const [key, setKey] = useState("owned");
  const [ownedPageNumber, setOwnedPageNumber] = useState(1);
  const [enrollPageNumber, setEnrollPageNumber] = useState(1);
  const dispatch = useDispatch();
  const ownedCoursesPage = useCourseStore(it => it.owned);
  const enrolledCoursesPage = useCourseStore(it => it.enrolled);

  const onSelectKey = useCallback(setKey, [setKey]);
  const onSelectOwnedPage = useCallback(setOwnedPageNumber, [setOwnedPageNumber]);
  const onSelectEnrollPage = useCallback(setEnrollPageNumber, [setEnrollPageNumber]);

  useEffect(() => {
    if (key === "owned") {
      dispatch(fetchOwnedCourses(ownedPageNumber));
    } else {
      dispatch(fetchEnrolledCourses(enrollPageNumber));
    }
  }, [key, dispatch, ownedPageNumber, enrollPageNumber]);

  return (
    <Container as="section">
      <Tabs activeKey={key} onSelect={onSelectKey}>
        <Tab eventKey="owned" title="Мои курсы">
          <OwnedCoursesList items={ownedCoursesPage.content} />
          <Paginator info={ownedCoursesPage} onSelect={onSelectOwnedPage} />
        </Tab>
        <Tab eventKey="enrolled" title="Курсы на которые я записан">
          <EnrolledCoursesList items={enrolledCoursesPage.content} />
          <Paginator info={enrolledCoursesPage} onSelect={onSelectEnrollPage} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default ProfileCoursesInfo;