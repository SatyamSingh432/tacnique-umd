import "react-responsive-modal/styles.css";
import { Modal as ReactModal } from "react-responsive-modal";

import "./UserForm.css";

const UserForm = ({ isFormOpen, setIsFormOpen }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <ReactModal open={isFormOpen} onClose={() => setIsFormOpen(false)} center>
      <div className="form-container">
        <form class="user-form" onSubmit={handleSubmit}>
          <h2>Add A New User</h2>

          <label for="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            required
          />

          <label for="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label for="street">
            Street <span className="required">*</span>
          </label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Street"
            required
          />

          <label for="suite">
            Suite <span className="required">*</span>
          </label>
          <input
            type="text"
            id="suite"
            name="suite"
            placeholder="Suite"
            required
          />

          <label for="city">
            City <span className="required">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            required
          />

          <label for="phone">
            Phone <span className="required">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
          />

          <label for="companyName">
            Company Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            required
          />
          <div className="btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default UserForm;
