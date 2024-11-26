import TableRow from "./TableRow";
import "./UserTable.css";

import { data } from "../data";

const Table = () => {
  return (
    <main className="main">
      <table className="table-container">
        <thead>
          <tr className="row row-heading">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <TableRow
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
              />
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
