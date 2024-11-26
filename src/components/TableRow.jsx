import "./TableRow.css";

const TableRow = ({ user }) => {
  const { id, name, email, address } = user;
  return (
    <tr className="row">
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{`${address.street}, ${address.suite}, ${address.city}`}</td>
      <td className="actions">
        <button className="btn edit-btn">Edit</button>

        <button className="btn delete-btn">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
