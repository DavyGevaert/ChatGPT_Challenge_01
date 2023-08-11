namespace ChatGPT_Challenge_01.Model
{
    public class TaskModel
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }

        public string? Description { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Completed { get; set; }
    }
}
