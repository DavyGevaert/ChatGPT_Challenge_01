using ChatGPT_Challenge_01.Model;
using ChatGPT_Challenge_01.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ChatGPT_Challenge_01.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ILogger<TasksController> _logger;
        private readonly ITaskService _taskService;

        public TasksController(ILogger<TasksController> logger, ITaskService taskService)
        {
            _logger = logger;
            _taskService = taskService;
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(TaskModel), 200)]
        public IActionResult Get(Guid id)
        {
            var task = _taskService.Get(id);

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        [HttpGet]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IList<TaskModel>), 200)]
        public IActionResult Find()
        {
            var tasks = _taskService.Find();
            return Ok(tasks);
        }

        [HttpPost]
        public IActionResult Create(TaskModel task)
        {
            var createdTask = _taskService.Create(task);
            return Ok(createdTask);
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromRoute] Guid id, [FromBody] TaskModel task)
        { 
            var updatedTask = _taskService.Update(id, task);
            return Ok(updatedTask);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var isDeleted = _taskService.Delete(id);
            if (!isDeleted)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
