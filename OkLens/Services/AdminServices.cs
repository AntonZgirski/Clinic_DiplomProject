using OkLens.Models;

namespace OkLens.Services
{
  public class AdminServices
  {
    private readonly OkLensContext _okLensContext;
    public AdminServices(OkLensContext okLensContext)
    {
      _okLensContext = okLensContext;
    }
    public List<ListEmployeeForView> GetEmployees()
    {
      return _okLensContext.ListEmployeeForViews.ToList();
    }

    public List<Role> GetRoles()
    {
      return _okLensContext.Roles.ToList();
    }

    public void SaveEmployee(object emp)
    {
      _okLensContext.Add(emp);
      _okLensContext.SaveChanges();
    }

    public bool CheckDublicateLoginEmployee(string login)
    {
      var employee = _okLensContext.Employees.Where(p => p.Login == login).FirstOrDefault();
      if (employee == null) return false;
      else return true;
    }
  }
}
