import React, {useEffect} from "react";
import DataTable from "react-data-table-component"
import UserExpandRow from "./UserExpandRow";
import {useDispatch, useSelector} from "react-redux";
import {fetchRoles} from "../../../../storage/actions";
import {CircleLoader} from "../../../../components/Loaders";

const columns = [
  {
    name: 'Электронная почта',
    selector: 'email',
  },
  {
    name: 'Права доступа',
    selector: 'role.name',
  },
  {
    name: 'Имя',
    selector: 'name',
  },
  {
    name: 'Фамилия',
    selector: 'lastname',
  },
]

function UsersTable({info, onSelectPage, loading}) {
  const dispatch = useDispatch();
  const roles = useSelector(store =>
    store.users.roles.map(it => ({name: it.name, disabled: it.programmatically}))
  );
  const roleChanging = useSelector(store => store.app.changingRole);

  useEffect(() => dispatch(fetchRoles()), [dispatch]);

  return (
    <DataTable disabled={roleChanging}
               title={"Users list"}
               data={info.content}
               columns={columns}
               pagination
               paginationServer
               paginationTotalRows={info.totalElements}
               onChangePage={onSelectPage}
               expandableRows
               expandOnRowClicked
               expandableRowsComponent={<UserExpandRow roles={roles} />}
               progressPending={loading}
               progressComponent={<CircleLoader noBg />}
    />
  )
}

export default UsersTable;