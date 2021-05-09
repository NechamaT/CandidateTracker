import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams} from "react-router-dom";

const Details = () => {
  const [candidate, setCandidate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: "",
    status: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const getCandidateById = async () => {
      console.log({ id });
      const { data } = await axios.get(`api/candidatetracker/details?id=${id}`);
      setCandidate(data);
    };
    getCandidateById();
  }, []);

const onClick = e =>{
setCandidate({...candidate, status: e.target.name})
}
  const { firstName, lastName, phoneNumber, email, notes, status } = candidate;
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card card-body bg-light">
          <h4>
            Name: {firstName} {lastName}
          </h4>
          <h4>Email: {email}</h4>
          <h4>Phone: {phoneNumber}</h4>
          <h4>Status: {status}</h4>
          <h4>Notes:</h4>
          <p>{notes}</p>
          <div>
              <div className='btn-group'>
            <button className="btn btn-primary" name ="Confirmed" onChange={onClick}>Confirm</button>
            <br />
            <button className="btn btn-danger" name="Refused" onChange={onClick}>Refuse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
