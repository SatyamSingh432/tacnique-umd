import { toast } from "react-toastify";
import { Modal as ReactModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { userInitalState } from "./UserManagement";

import "./UserForm.css";

const UserForm = ({
  isFormOpen,
  setIsFormOpen,
  user,
  setUser,
  isEdit,
  handleAddUser,
  setError,
  handleUpdate,
}) => {
  const handleSubmitUser = async (evt) => {
    evt.preventDefault();
    if (isEdit) {
      await editUser();
    } else {
      await createUser();
    }
  };

  const createUser = async () => {
    try {
      await toast.promise(handleAddUser(user), {
        pending: "Adding User..",
        success: "User Added.",
        error: "Failed to Add User",
      });
      setUser(userInitalState);
      setIsFormOpen(false);
    } catch (err) {
      setError(err);
    }
  };

  const editUser = async () => {
    try {
      await toast.promise(handleUpdate(user.id, user), {
        pending: "Updating User..",
        success: "User Updated.",
        error: "Failed to Update User",
      });

      setIsFormOpen(false);
    } catch (err) {
      setError(err);
    }
  };

  const handleChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  return (
    <ReactModal open={isFormOpen} onClose={() => setIsFormOpen(false)} center>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmitUser}>
          <h2>{isEdit ? "Edit" : "Add A New"} User</h2>

          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            required
            value={user?.name}
            onChange={handleChange}
          />

          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={user?.email}
            onChange={handleChange}
          />

          <label htmlFor="street">
            Street <span className="required">*</span>
          </label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Street"
            required
            value={user?.street}
            onChange={handleChange}
          />

          <label htmlFor="suite">
            Suite <span className="required">*</span>
          </label>
          <input
            type="text"
            id="suite"
            name="suite"
            placeholder="Suite"
            required
            value={user?.suite}
            onChange={handleChange}
          />

          <label htmlFor="city">
            City <span className="required">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            required
            value={user?.city}
            onChange={handleChange}
          />

          <label htmlFor="phone">
            Phone <span className="required">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
            value={user?.phone}
            onChange={handleChange}
          />

          <label htmlFor="companyName">
            Company Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            required
            value={user?.companyName}
            onChange={handleChange}
          />
          <div className="btn-container">
            <button type="submit">{isEdit ? "Save Changes" : "Submit"}</button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default UserForm;
