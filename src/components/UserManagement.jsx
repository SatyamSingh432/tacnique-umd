import { useState } from "react";
import Header from "./Header";
import UserTable from "./UserTable";

const UserManagement = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    phone: "",
    companyName: "",
  });

  return (
    <>
      <Header user={user} setUser={setUser} />
      <UserTable />
    </>
  );
};

export default UserManagement;
