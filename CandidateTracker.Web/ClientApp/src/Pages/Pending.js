import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PendingTableRow from "./../components/PendingTableRow";

const Pending = () => {
  const [pendingCandidates, setPendingCandidates] = useState([]);

  useEffect(() => {
    const getPendingCandidates = async () => {
      const { data } = await axios.get(`api/candidatetracking/getpending`);
      setPendingCandidates(data);
    };

    getPendingCandidates();
  }, []);

  return (
    <div>
      <div class="container" style="margin-top: 20;">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>View Details</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
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
