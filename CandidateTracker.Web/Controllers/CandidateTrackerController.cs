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
        [Route("addcandidate")]
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
        [Route("statusrefused")]
        public void statusrefused(int id)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.StatusRefused(id);
        }
        [HttpPost]
        [Route("statusconfirmed")]
        public void statusconfirmed(int id)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.StatusConfirm(id);
        }
    }
}
