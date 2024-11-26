import { useState } from "react";
import "./Header.css";
import UserForm from "./UserForm";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="title">User Management DashBoard</h1>
      <button className="cta-btn" onClick={() => setIsFormOpen(true)}>
        Create User
      </button>
      <UserForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
    </header>
  );
};

export default Header;
