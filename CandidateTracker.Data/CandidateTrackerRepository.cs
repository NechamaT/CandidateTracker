using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CandidateTracker.Data
{
    public class CandidateTrackerRepository
    {
        private readonly string _connectionString;
        public CandidateTrackerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }

        public void Update(Candidate candidate)
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            ctx.Candidates.Attach(candidate);
            ctx.Entry(candidate).State = EntityState.Modified;
            ctx.SaveChanges();
        }
      
        public List<Candidate> GetByStatus(Status status)
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == status).OrderByDescending(c => c.FirstName).ToList();
        }

        public Candidate GetCandidateById(int id)
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public List<int> GetCounts()
        {
            var ctx = new CandidateTrackerDbContext(_connectionString);
            var result = new List<int>();
            result.Add(ctx.Candidates.Where(c => c.Status == Status.Pending).Count());
            result.Add(ctx.Candidates.Where(c => c.Status == Status.Refused).Count());
            result.Add(ctx.Candidates.Where(c => c.Status == Status.Confirmed).Count());
            return result;
        }

       
    }
}
