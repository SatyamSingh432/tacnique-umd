import { useEffect, useState } from "react";
import Header from "./Header";
import UsersTable from "./UsersTable";
import Error from "./Error";

import { getUsers } from "../services/userService";

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
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) return <Error message={error} />;

  return (
    <>
      <Header user={user} setUser={setUser} />
      <UsersTable users={users} />
    </>
  );
};

export default UserManagement;
