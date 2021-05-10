import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./../components/TableRow";

const Pending = () => {
  const [confirmedCandidates, setConfirmedCandidates] = useState([]);

  useEffect(() => {
    const getConfirmedCandidates = async () => {
      const { data } = await axios.get(`api/candidatetracker/getconfirmed`);
      setConfirmedCandidates(data);
    };

    getConfirmedCandidates();
  }, []);

  return (
    <div>
      <div className="container" style={{marginTop: 20}}>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {!!confirmedCandidates.length &&
              confirmedCandidates.map((candidate) => (
                <TableRow candidate={candidate} key={candidate.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Pending;