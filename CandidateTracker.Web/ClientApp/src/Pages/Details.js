import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import {Context} from '../components/Context';

const Details = () => {
  const ctx = useContext(Context);
  const [candidate, setCandidate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: "",
    status: "",
  });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getCandidateById = async () => {
      console.log({ id });
      const { data } = await axios.get(`api/candidatetracker/details?id=${id}`);
      setCandidate(data);
    };
    getCandidateById();
  }, []);

  const onButtonClick = async e => {
    const copy ={...candidate};
    copy.status = e.target.name;
    console.log(copy);
    await axios.post("api/candidatetracker/updatecandidate", copy);
    ctx.updateCounts();
    history.push("/");
  };

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
            <div className="btn-group">
            <button onClick={onButtonClick} name='confirmed' className="btn btn-primary">Confirm</button>
                
                <button onClick={onButtonClick} name='refused' style={{marginLeft:20}} className="btn btn-danger">Refuse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
