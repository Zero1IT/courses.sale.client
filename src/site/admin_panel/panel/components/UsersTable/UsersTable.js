import React from "react";
import DataTable from "react-data-table-component"

const columns = [
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Role',
    selector: 'role',
  },
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Lastname',
    selector: 'lastname',
  },
]

function UsersTable({data}) {
  return (
    <div>
      <DataTable title={"Users list"}
                 data={data}
                 columns={columns}
                 expandableRows
      />
    </div>
  )
}

export default UsersTable;