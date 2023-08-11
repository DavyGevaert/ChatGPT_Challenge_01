using ChatGPT_Challenge_01.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatGPT_Challenge_01.Services.Abstractions
{
    public interface ITaskService
    {
        TaskModel Get(Guid id);
        IList<TaskModel> Find();

        TaskModel Create(TaskModel task);
        TaskModel Update(Guid id, TaskModel task);
        bool Delete(Guid id);
    }
}
