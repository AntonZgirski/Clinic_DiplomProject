using Microsoft.EntityFrameworkCore;
using OkLens.Models;
using OkLens.Services;

namespace OkLens
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var builder = WebApplication.CreateBuilder(args);

      // Add services to the container.
      builder.Services.AddControllersWithViews();     

      //var builder = WebApplication.CreateBuilder(args);
      // Add services to the container.
      var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
      builder.Services.AddControllersWithViews();
      builder.Services.AddDbContext<OkLensContext>(options =>
          options.UseSqlServer(connectionString));
      builder.Services.AddScoped<RegisterServices>();
      builder.Services.AddScoped<AdminServices>();

      builder.Services.AddAuthorization(options =>
      {
        options.AddPolicy("RequireAdministratorRole",
             policy => policy.RequireRole("Administrator"));
      });

      var app = builder.Build();
      // Configure the HTTP request pipeline.
      if (!app.Environment.IsDevelopment())
      {
        app.UseExceptionHandler("/Home/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseStaticFiles();

      app.UseRouting();

      app.UseAuthorization();

      //app.MapControllerRoute(
      //    name: "default",
      //    pattern: "{controller=Register}/{action=Register}/{id?}");
      app.MapControllerRoute(
          name: "default",
          pattern: "{controller=Admin}/{action=Employee}/{id?}");


      app.Run();
    }
  }
}