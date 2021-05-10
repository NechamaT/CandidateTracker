import React, { useState, useEffect } from "react";
import axios from "axios";
import PendingTableRow from "./../components/PendingTableRow";

const Pending = () => {
  const [pendingCandidates, setPendingCandidates] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const getPendingCandidates = async () => {
      const { data } = await axios.get(`api/candidatetracker/getpending`);
      setPendingCandidates(data);
    };

    getPendingCandidates();
  }, []);

  return (
    <div>
      <div className="container" style={{marginTop: 20}}>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>View Details</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {!!pendingCandidates.length &&
              pendingCandidates.map((candidate) => (
                <PendingTableRow candidate={candidate} key={candidate.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Pending;