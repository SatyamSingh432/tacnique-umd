import TableRow from "./TableRow";
import "./UsersTable.css";

const UsersTable = ({
  users,
  handleDelete,
  setError,
  handleUpdate,
  setUser,
  user,
}) => {
  return (
    <main className="main">
      <table className="table-container">
        <thead>
          <tr className="row row-heading">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((currentUser) => {
            return (
              <TableRow
                user={user}
                setUser={setUser}
                key={currentUser.id}
                currentUser={currentUser}
                handleDelete={handleDelete}
                setError={setError}
                handleUpdate={handleUpdate}
              />
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default UsersTable;
