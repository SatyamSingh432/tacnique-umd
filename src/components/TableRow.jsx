import { useState } from "react";
import { toast } from "react-toastify";

import "./TableRow.css";
import UserForm from "./UserForm";

const TableRow = ({
  currentUser,
  handleDelete,
  setError,
  handleUpdate,
  setUser,
  user,
}) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const { id, name, email, address, company } = currentUser;

  const handleDeleteUser = async () => {
    try {
      await toast.promise(handleDelete(currentUser.id), {
        pending: "Deleting User.",
        success: "User Deleted.",
        error: "User Deletion Failed",
      });
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <tr className="row">
        <td>{id || "--"}</td>
        <td>{name || "--"}</td>
        <td>{email || "--"}</td>
        <td className="address">
          {`${address.street}, ${address.suite}, ${address.city}` || "--"}
        </td>
        <td>{company.name || "--"}</td>
        <td className="actions">
          <button
            className="btn edit-btn"
            onClick={() => {
              setIsEditFormOpen(true);

              const userToEdit = {
                id,
                name: name,
                email: email,
                street: address?.street,
                suite: address?.suite,
                city: address?.city,
                phone: currentUser?.phone,
                companyName: currentUser?.company?.name,
              };
              setUser(userToEdit);
            }}
          >
            Edit
          </button>
          <button className="btn delete-btn" onClick={handleDeleteUser}>
            Delete
          </button>
        </td>
      </tr>
      <UserForm
        isFormOpen={isEditFormOpen}
        setIsFormOpen={setIsEditFormOpen}
        isEdit
        user={user}
        setUser={setUser}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default TableRow;
