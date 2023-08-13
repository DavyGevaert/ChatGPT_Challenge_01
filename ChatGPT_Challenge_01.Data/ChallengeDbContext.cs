using ChatGPT_Challenge_01.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatGPT_Challenge_01.Data
{
    public class ChallengeDbContext : DbContext
    {
        public ChallengeDbContext(DbContextOptions<ChallengeDbContext> options) : base(options)
        {

        }

        private Random random = new Random();

        public DbSet<TaskModel> Tasks { get; set; }

        public void Seed()
        {
            if (!this.Database.IsInMemory())
            {
                return;
            }

            Tasks.Add(new TaskModel
            {
                Id = Guid.NewGuid(),
                Title = "Wassen",
                Description = "De was in de wasmachine doen",
                DueDate = DateTime.Now.AddHours(random.Next(1, 15)),
                Completed = true
            });

            Tasks.Add(new TaskModel
            {
                Id = Guid.NewGuid(),
                Title = "Strijken",
                Description = "De gewaste was strijken op de strijkplank",
                DueDate = DateTime.Now.AddHours(random.Next(1, 10)),
                Completed = false
            });

            Tasks.Add(new TaskModel
            {
                Id = Guid.NewGuid(),
                Title = "Slapen",
                Description = "1 of meerdere keren een dutje doen",
                DueDate = DateTime.Now.AddHours(random.Next(1, 8)),
                Completed = false
            });

            Tasks.Add(new TaskModel
            {
                Id = Guid.NewGuid(),
                Title = "Surfen op het Internet",
                Description = "Het Internet gebruiken en lezen wat je wenst",
                DueDate = DateTime.Now.AddHours(random.Next(1, 3)),
                Completed = false
            });

            Tasks.Add(new TaskModel
            {
                Id = Guid.NewGuid(),
                Title = "Autorijden",
                Description = "Plankgas geven maar niet met een zware voet",
                DueDate = DateTime.Now.AddHours(random.Next(1, 15)),
                Completed = true
            });

            this.SaveChanges();
        }       
    }
}
