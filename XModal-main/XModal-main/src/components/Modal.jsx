import { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [visibility, setVisibility] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    const phone = e.target.elements["phone"].value;
    if (phone.length != 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    const dob = new Date(e.target.elements["dob"].value);
    const now = new Date();

    if (dob > now) {
      alert("Invalid date of birth. Date of birth cannot be in future.");
      return;
    }

    e.target.reset();
    handleVisibility();
  }

  function handleVisibility() {
    setVisibility((prv) => !prv);
  }

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleVisibility}>Open Form</button>

      {visibility ? (
        <div className="modal" onClick={handleVisibility}>
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <h2>Fill Details</h2>
            <form onSubmit={submitHandler}>
              <label htmlFor="username">Username:</label>
              <input required type="text" id="username" />
              <label htmlFor="email">Email Address:</label>
              <input required type="email" id="email" />
              <label htmlFor="phone">Phone Number:</label>
              <input required type="tel" id="phone" />
              <label htmlFor="dob">Date of Birth:</label>
              <input required type="date" id="dob" />
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
