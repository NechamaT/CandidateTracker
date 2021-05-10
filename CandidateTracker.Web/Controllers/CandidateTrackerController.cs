using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTrackerController : ControllerBase
    {
        private readonly string _connectionString;

        public CandidateTrackerController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addCandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.AddCandidate(candidate);
        }

        [HttpGet]
        [Route("details")]
        public Candidate Details(int id)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpPost]
        [Route("updateCandidate")]
        public void UpdateCandidate(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.Update(candidate);
        }
     

        [HttpGet]
        [Route("getPending")]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetByStatus(Status.Pending);
        }


        [HttpGet]
        [Route("getrefused")]
        public List<Candidate> GetRefused()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetByStatus(Status.Refused);
        }

        [HttpGet]
        [Route("getConfirmed")]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetByStatus(Status.Confirmed);
        }

        [HttpGet]
        [Route("getCounts")]
        public List<int> GetCounts()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetCounts();
        }

    }
}
