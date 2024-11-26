const TableRow = ({ id, name, email }) => {
  return (
    <tr className="row">
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <span>Edit</span> / <span>Delete</span>
      </td>
    </tr>
  );
};

export default TableRow;
