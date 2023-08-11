using ChatGPT_Challenge_01.Data;
using ChatGPT_Challenge_01.Services;
using ChatGPT_Challenge_01.Services.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Writers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSwaggerGen(c =>
{
    c.AddServer(new OpenApiServer
    {
        Description = "Development Server",
        Url = "https://localhost:7025"
    });
});

builder.Services.AddDbContext<ChallengeDbContext>(options =>
{
    options.UseInMemoryDatabase("ChallengeManager");
});
builder.Services.AddScoped<ITaskService, TaskService>();

var app = builder.Build();

app.UseCors(builder => builder.WithOrigins("*"));

app.UseSwagger().UseSwaggerUI();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

    
}

SeedDatabase();  // use before app.UseStaticFiles();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();

void SeedDatabase() //can be placed at the very bottom under app.Run()
{
    using (var scope = app.Services.CreateScope())
    {
        var dbInitializer = scope.ServiceProvider.GetRequiredService<ChallengeDbContext>();
        dbInitializer.Seed();
    }
}
