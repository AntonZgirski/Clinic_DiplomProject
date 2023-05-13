using OkLens.Models;
using System.Text.Json;

namespace OkLens.Services
{
  public class RegisterServices
  {
    private readonly OkLensContext Context;

    public RegisterServices(OkLensContext context)
    {
      Context = context;
    }
    public void WriteUserId(int id)
    {

      using (FileStream fs = new FileStream("userid.json", FileMode.Create, FileAccess.Write, FileShare.None))
      {
        JsonSerializer.SerializeAsync(fs, id);
      }
    }

    public int GetUserId()
    {
      using (FileStream fs = new FileStream("userid.json", FileMode.Open, FileAccess.Read, FileShare.None))
      {
        var id = JsonSerializer.Deserialize<int>(fs);
        return id;
      }
    }

    public Employee GetUser(string login)
    {
      var user = Context.Employees.Where(p => p.Login == login).FirstOrDefault();
      var role = Context.Roles.FirstOrDefault(p => p.RoleId == user.RoleId);
      user.Role = role;
      return user;
    }

    public void FirstEntryApp(Employee employee,string password)
    {
      employee.Password = password;
      employee.FirstEntry = false;
      Context.SaveChanges();
    }

  }
}
