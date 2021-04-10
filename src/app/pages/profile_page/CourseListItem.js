import React from "react";
import {ListGroupItem} from "react-bootstrap";
import Link from "../../components/Link";

function CourseListItem({item, baseUrl, secondUrl, actionName, secondaryActionName}) {
  return (
    <ListGroupItem className="clearfix m-1">
      <h3 className="list-group-item-heading">{item.title}</h3>
      <p className="list-group-item-text lead">
        {item.description?.substr(0, 300)}{item.description?.length > 300 ? '...' : ''}
      </p>
      <p>
        <b>Дата начала: </b>{new Date(item.startDate).toLocaleString()}
      </p>
      <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
        <Link className="btn btn-primary" to={baseUrl + item.id}>{actionName}</Link>
        {secondaryActionName && <Link className="btn btn-default" to={secondUrl + item.id}>{secondaryActionName}</Link>}
      </div>
    </ListGroupItem>
  )
}

export default CourseListItem;