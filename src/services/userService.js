import axios from "axios";

const BASE_API = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  try {
    const response = await axios.get(BASE_API);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

const addUser = async (user) => {
  try {
    const response = await axios.post(BASE_API, user);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add user");
  }
};

const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${BASE_API}/${id}`, user);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_API}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

export { getUsers, addUser, updateUser, deleteUser };
