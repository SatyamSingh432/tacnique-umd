import "./TableRow.css";

const TableRow = ({ id, name, email }) => {
  return (
    <tr className="row">
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td className="actions">
        <button className="btn edit-btn">Edit</button>

        <button className="btn delete-btn">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
