﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CandidateTracker.Data
{
    public class CandidateTrackerDbContext :DbContext
    {
        private readonly string _connectionString;

        public CandidateTrackerDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidate>()
                .Property(c => c.Status)
                .HasConversion<int>();
        }
        public DbSet<Candidate> Candidates { get; set; }


    }
}
