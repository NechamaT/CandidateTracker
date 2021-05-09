import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddCandidate = () => {
  const [candidate, setCandidate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: "",
  });
  const history = useHistory();

  const onTextChange = (e) => {
    const copy = { ...candidate };
    copy[e.target.name] = e.target.value;
    setCandidate(copy);
  };

  const onSubmitClick = async () => {
    await axios.post("/api/candidatetracker/addcandidate", candidate);
    history.push("/");
  };
const {firstName, lastName, email, phoneNumber, notes} = candidate;
  return (
   <div className="col-md-6 offset-md-3">
      <div className="card card-body bg-light">
        <form>
            <h3>Add Candidate</h3>
          <input
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={onTextChange}
          />
          <br />
          <input
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={onTextChange}
          />
          <br />
          <input
            className="form-control"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onTextChange}
          />
          <br />
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onTextChange}
          />
          <br />
          <textarea
            name="notes"
            className="form-control"
            rows="4"
            value={notes}
            onChange={onTextChange}
          ></textarea>
          <br />
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={onSubmitClick}
          >
            Submit
          </button>
        </form>
      </div>
      </div>
 
  );
};
export default AddCandidate;
