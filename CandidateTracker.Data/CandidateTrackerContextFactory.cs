using CandidateTracker.Data;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ReactBlogsite.Data
{
    public class CandidateTrackerContextFactory : IDesignTimeDbContextFactory<CandidateTrackerDbContext>
    {
        public CandidateTrackerDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CandidateTracker.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateTrackerDbContext(config.GetConnectionString("ConStr"));
        }
    }
}
