/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";
import Checkbox from "../CustomCheckbox/CustomCheckbox.jsx";
import Button from "../CustomButton/CustomButton.jsx";

export class Tasks extends Component {
  handleCheckbox = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.checked
    });
  };

  render() {
    const edit = <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top"
                         title="edit_tooltip">Edit Task</button>;
    const remove = <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top"
                           title="remove_tooltip">Remove</button>;
    const tasks_title = [
      'Sign contract for "What are conference organizers afraid of?"',
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi",
      "Create 4 Invisible User Experiences you Never Knew About",
      'Read "Following makes Medium better"',
      "Unfollow 5 enemies from twitter"
    ];
    const tasks = [];
    let number;
    for (let i = 0; i < tasks_title.length; i++) {
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
            />
          </td>
          <td>{tasks_title[i]}</td>
          <td className="td-actions text-right">
            <Button bsStyle="info" simple className="btn btn-xs btn-info" data-toggle="tooltip" data-placement="top"
                    title="Edit">
              <i className="fa fa-edit"/>
            </Button>
            <Button bsStyle="danger" simple className="btn btn-xs btn-danger" data-toggle="tooltip" data-placement="top"
                    title="Remove">
              <i className="fa fa-times"/>
            </Button>
          </td>
        </tr>
      );
    }
    // TODO: OverlayTrigger
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
