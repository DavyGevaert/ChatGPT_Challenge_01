﻿namespace ChatGPT_Challenge_01.ReadModels
{
    public class TaskRm
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }

        public string? Description { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Completed { get; set; }
    }
}
