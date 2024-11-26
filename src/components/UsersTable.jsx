import TableRow from "./TableRow";
import "./UsersTable.css";

const UsersTable = ({ users }) => {
  console.log(users);
  return (
    <main className="main">
      <table className="table-container">
        <thead>
          <tr className="row row-heading">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return <TableRow key={user.id} user={user} />;
          })}
        </tbody>
      </table>
    </main>
  );
};

export default UsersTable;
