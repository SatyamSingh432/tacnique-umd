import { useState } from "react";
import "./TableRow.css";
import UserForm from "./UserForm";

const TableRow = ({ user }) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editUser, setEditUser] = useState(user);
  const { id, name, email, address } = user;

  return (
    <>
      <tr className="row">
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{`${address.street}, ${address.suite}, ${address.city}`}</td>
        <td className="actions">
          <button
            className="btn edit-btn"
            onClick={() => setIsEditFormOpen(true)}
          >
            Edit
          </button>
          <button className="btn delete-btn">Delete</button>
        </td>
      </tr>
      <UserForm
        isFormOpen={isEditFormOpen}
        setIsFormOpen={setIsEditFormOpen}
        isEdit
        user={{
          name: name,
          email: email,
          street: address?.street,
          suite: address?.suite,
          city: address?.city,
          phone: editUser?.phone,
          companyName: editUser?.company?.name,
        }}
        setUser={setEditUser}
      />
    </>
  );
};

export default TableRow;
