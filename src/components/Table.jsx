import "./Table.css";

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
          <tr className="row">
            <td>1</td>
            <td>Leanne Graham</td>
            <td>Sincere@april.biz</td>
            <td>
              <span>Edit</span> / <span>Delete</span>
            </td>
          </tr>
          <tr className="row">
            <td>1</td>
            <td>Leanne Graham</td>
            <td>Sincere@april.biz</td>
            <td>
              <span>Edit</span> / <span>Delete</span>
            </td>
          </tr>
          <tr className="row">
            <td>1</td>
            <td>Leanne Graham</td>
            <td>Sincere@april.biz</td>
            <td>
              <span>Edit</span> / <span>Delete</span>
            </td>
          </tr>
          <tr className="row">
            <td>1</td>
            <td>Leanne Graham</td>
            <td>Sincere@april.biz</td>
            <td>
              <span>Edit</span> / <span>Delete</span>
            </td>
          </tr>
          <tr className="row">
            <td>1</td>
            <td>Leanne Graham</td>
            <td>Sincere@april.biz</td>
            <td>
              <span>Edit</span> / <span>Delete</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Table;
