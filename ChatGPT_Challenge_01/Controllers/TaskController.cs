using ChatGPT_Challenge_01.ReadModels;
using Microsoft.AspNetCore.Mvc;

namespace ChatGPT_Challenge_01.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ILogger<TaskController> _logger;
        private static Random random = new Random();

        public TaskController(ILogger<TaskController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<TaskRm> GetTasks()
            => new TaskRm[]
            {
                new (                        
                        Guid.NewGuid(),
                        "Wassen",
                        "De was in de wasmachine doen",
                        DateTime.Now.AddHours(random.Next(1,15)),
                        DateTime.Now.AddHours(random.Next(1,20))                       
                    ),
                new (
                        Guid.NewGuid(),
                        "Strijken",
                        "De gewaste was strijken op de strijkplank",
                        DateTime.Now.AddHours(random.Next(1,10)),
                        DateTime.Now.AddHours(random.Next(10,15))
                    ),
                new (
                        Guid.NewGuid(),
                        "Slapen",
                        "1 of meerdere keren een dutje doen",
                        DateTime.Now.AddHours(random.Next(1,8)),
                        DateTime.Now.AddHours(random.Next(8,10))
                    ),
                new (
                        Guid.NewGuid(),
                        "Surfen op het Internet",
                        "Het Internet gebruiken en lezen wat je wenst",
                        DateTime.Now.AddHours(random.Next(1,3)),
                        DateTime.Now.AddHours(random.Next(3,5))
                    ),
                new (
                        Guid.NewGuid(),
                        "Autorijden",
                        "Plankgas geven maar niet met een zware voet",
                        DateTime.Now.AddHours(random.Next(1,2)),
                        DateTime.Now.AddHours(random.Next(2,4))
                    )
            };
    }
}
