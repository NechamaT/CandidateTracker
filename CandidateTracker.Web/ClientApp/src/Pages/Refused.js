import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from '../components/TableRow'


const Refused = () => {
  const [refusedCandidates, setRefusedCandidates] = useState([]);

  useEffect(() => {
    const getRefusedCandidates = async () => {
      const { data } = await axios.get(`api/candidatetracker/getrefused`);
      setRefusedCandidates(data);
    };

    getRefusedCandidates();
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
            {!!refusedCandidates.length &&
              refusedCandidates.map((candidate) => (
                <TableRow candidate={candidate} key={candidate.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Refused;