import { useState } from "react";
import "./Header.css";
import UserForm from "./UserForm";
import { userInitalState } from "./UserManagement";

const Header = ({ user, setUser, handleAddUser, setError }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="title">User Management DashBoard</h1>
      <button
        className="cta-btn"
        onClick={() => {
          setUser(userInitalState);
          setIsFormOpen(true);
        }}
      >
        Create User
      </button>
      <UserForm
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        user={user}
        setUser={setUser}
        handleAddUser={handleAddUser}
        setError={setError}
      />
    </header>
  );
};

export default Header;
