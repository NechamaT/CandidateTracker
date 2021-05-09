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

        public void StatusConfirm(int id)
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            var candidate = ctx.Candidates.FirstOrDefault(c => c.Id == id);
            candidate.Status = Status.Confirmed;
            ctx.Candidates.Add(candidate);
            ctx.Entry(candidate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            ctx.SaveChanges();
        }

        public void StatusRefused(int id)
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            var candidate = ctx.Candidates.FirstOrDefault(c => c.Id == id);
            candidate.Status = Status.Refused;
            ctx.Candidates.Add(candidate);
            ctx.Entry(candidate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            ctx.SaveChanges();
        }

        public List<Candidate> CountRefused()
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Refused).ToList();
        }
        public List<Candidate> CountPending()
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }
        public List<Candidate> CountConfirmed()
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }

        public Candidate GetCandidateById(int id)
        {
            using var ctx = new CandidateTrackerDbContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }
    }
}
