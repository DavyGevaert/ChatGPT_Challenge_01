namespace ChatGPT_Challenge_01.ReadModels
{
    // shorter version instead of getters and setters
    // record is introduced in C# 9
    public record TaskRm(Guid Id, string Title, string Description, DateTime DueDate, DateTime Completed);
}
