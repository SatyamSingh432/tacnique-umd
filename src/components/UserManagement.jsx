import { useEffect, useState } from "react";
import Header from "./Header";
import UsersTable from "./UsersTable";
import Error from "./Error";
import { getUsers, deleteUser, addUser } from "../services/userService";

import "./UserManagement.css";

export const userInitalState = {
  name: "",
  email: "",
  street: "",
  suite: "",
  city: "",
  phone: "",
  companyName: "",
};

const UserManagement = () => {
  const [user, setUser] = useState(userInitalState);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const data = await getUsers();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUsers();
  }, []);

  const serializeData = (user) => {
    const serializedUser = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: {
        street: user.street,
        suite: user.suite,
        city: user.city,
      },
      company: {
        name: user.companyName,
      },
    };

    return serializedUser;
  };

  const handleAddUser = async (user) => {
    try {
      const userToAdd = serializeData(user);
      const resp = await addUser(userToAdd);
      setUsers([...users, resp]);
    } catch (error) {
      setError(error.message);
    }
  };

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
      <Header
        user={user}
        setUser={setUser}
        handleAddUser={handleAddUser}
        setError={setError}
      />
      {isLoading ? (
        <div className="loading-container">
          <div className="loading">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <UsersTable
          users={users}
          handleDelete={handleDelete}
          setError={setError}
        />
      )}
    </>
  );
};

export default UserManagement;
