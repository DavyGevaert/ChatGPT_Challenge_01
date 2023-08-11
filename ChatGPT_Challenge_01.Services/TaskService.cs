using ChatGPT_Challenge_01.Data;
using ChatGPT_Challenge_01.Model;
using ChatGPT_Challenge_01.Services.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatGPT_Challenge_01.Services
{
    public class TaskService : ITaskService
    {
        private readonly ChallengeDbContext _challengeDbContext;

        public TaskService(ChallengeDbContext challengeDbContext)
        {
            _challengeDbContext = challengeDbContext;
        }

        public TaskModel Get(Guid id)
        {
            var task = _challengeDbContext.Tasks
                .SingleOrDefault(p => p.Id == id);

            return task;
        }

        public IList<TaskModel> Find()
        {
            var tasks = _challengeDbContext.Tasks
                .ToList();

            return tasks;
        }


        public TaskModel Create(TaskModel task)
        {
            _challengeDbContext.Tasks.Add(task);
            _challengeDbContext.SaveChanges();

            return task;
        }

        public TaskModel Update(Guid id, TaskModel task)
        {
            var dbTask = Get(id);

            if (dbTask is null)
            {
                return null;
            }

            dbTask.Id = task.Id;
            dbTask.Title = task.Title;
            dbTask.Description = task.Description;
            dbTask.DueDate = task.DueDate;
            dbTask.Completed = task.Completed;

            _challengeDbContext.SaveChanges();

            return dbTask;
        }

        public bool Delete(Guid id)
        {
            var dbTask = Get(id);

            if (dbTask is null)
            {
                return false;
            }

            _challengeDbContext.Tasks.Remove(dbTask);
            _challengeDbContext.SaveChanges();

            return true;
        }
    }
}
