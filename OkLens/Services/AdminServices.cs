using OkLens.Models;
using OkLens.ViewModel;

namespace OkLens.Services
{
  public class AdminServices
  {
    private readonly OkLensContext _okLensContext;
    public AdminServices(OkLensContext okLensContext)
    {
      _okLensContext = okLensContext;
    }

    #region Employee  
    public List<ListEmployeeForView> GetEmployees()
    {
      return _okLensContext.ListEmployeeForViews.ToList();
    }

    public List<Role> GetRoles()
    {
      return _okLensContext.Roles.ToList();
    }

    public void AddEmployee(object emp)
    {
      _okLensContext.Add(emp);
      _okLensContext.SaveChanges();
    }

    public bool CheckDublicateLoginEmployee(string login)
    {
      var employee = _okLensContext.Employees.Where(p => p.Login == login).FirstOrDefault();
      return employee != null;
    }

    public Employee GetEmployee(int id)
    {
      var user = _okLensContext.Employees.Where(p => p.EmployeeId == id).FirstOrDefault();
      var role = _okLensContext.Roles.FirstOrDefault(p => p.RoleId == user.RoleId);
      user.Role = role;
      return user;
    }

    public void UpdateEmployee(Employee emp)
    {
      _okLensContext.Update(emp);
      _okLensContext.SaveChanges();
    }

    public EditEmployeeViewModel GetEditEmployeeViewModel(int id)
    {
      var edtvm = new EditEmployeeViewModel();
      var user = _okLensContext.Employees.Where(p => p.EmployeeId == id).FirstOrDefault();
      var role = _okLensContext.Roles.FirstOrDefault(p => p.RoleId == user.RoleId);
      user.Role = role;
      edtvm.Employee = user;
      edtvm.Roles = _okLensContext.Roles.ToList();
      return edtvm;
    }

    public void DeleteEmployee(Employee emp)
    {
      _okLensContext.Remove(emp);
      _okLensContext.SaveChanges();
    }
    
    #endregion Employee
  }
}
