using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using OkLens.Models;
using OkLens.Services;
using OkLens.ViewModel;

namespace OkLens.Controllers
{
  public class AdminController : Controller
  {
    private readonly ILogger<AdminController> _logger;
    private readonly AdminServices _adminServices;

    public AdminController(ILogger<AdminController> logger, AdminServices adminServices)
    {
      _logger = logger;
      _adminServices = adminServices;
    }

    #region Employee

    [HttpGet]
    public IActionResult Employee()
    {
      return View(_adminServices.GetEmployees());
    }

    [HttpGet]
    public IActionResult AddEmployee()
    {
      return View(_adminServices.GetRoles());
    }

    [HttpPost]
    public IActionResult SaveEmployee([FromForm] string fname,
                                      [FromForm] string sname,
                                      [FromForm] string lname,
                                      [FromForm] DateTime datebir,
                                      [FromForm] int role,
                                      [FromForm] string category,
                                      [FromForm] string login)
                                      
    {
      if(_adminServices.CheckDublicateLoginEmployee(login))
      {
        ViewBag.Error = ErrorMessage.ErrorDublicateLoginEmployee(login);
        return View("AddEmployee", _adminServices.GetRoles());
      }
      var emp = new Employee() 
      { 
        Fname = fname,
        Sname = sname,
        Lname = lname,
        DateBirthday = datebir,
        RoleId = role,
        Category = category,
        Login = login,
        FirstEntry = true
      };
      _adminServices.AddEmployee(emp);      
      return RedirectToAction("Employee");
    }

    public IActionResult DetailsEmployee(int id)
    {
      var emp = _adminServices.GetEmployee(id);
      return View(emp);
    }

    public IActionResult EditEmployee(int id)
    {
      return View(_adminServices.GetEditEmployeeViewModel(id));
    }

    [HttpPost]
    public IActionResult EditEmployee(int id,
                                      [FromForm] string fname,
                                      [FromForm] string sname,
                                      [FromForm] string lname,
                                      [FromForm] DateTime datebir,
                                      [FromForm] int role,
                                      [FromForm] string category,
                                      [FromForm] string login)
    {
      var emp = _adminServices.GetEmployee(id);
      if (emp.Login != login && _adminServices.CheckDublicateLoginEmployee(login))
      {        
        ViewBag.Error = ErrorMessage.ErrorDublicateLoginEmployee(login);
        return View("EditEmployee", _adminServices.GetEditEmployeeViewModel(id));
      }      
      emp.Lname = lname;
      emp.Sname = sname;
      emp.Fname = fname;
      emp.DateBirthday = datebir;
      emp.RoleId = role;
      emp.Category = category;
      emp.Login = login;

      _adminServices.UpdateEmployee(emp);
      return RedirectToAction("Employee");
    }

    [HttpPost]
    public IActionResult ReserPasswrodEmployee(int id)
    {
      var emp = _adminServices.GetEmployee(id);
      emp.Password = null;
      emp.FirstEntry = true;
      _adminServices.UpdateEmployee(emp);
      ViewBag.Error = ErrorMessage.SuccesReserPassword;
      return View("EditEmployee", _adminServices.GetEditEmployeeViewModel(id));
    }
    
    public IActionResult DeleteEmployee(int id)
    {
      var emp = _adminServices.GetEmployee(id);
      return View(emp);
    }
    
    public IActionResult DeleteEmp(int id)
    {
      var emp = _adminServices.GetEmployee(id);
      _adminServices.DeleteEmployee(emp);
      ViewBag.Error = ErrorMessage.SuccesDeleteEmployee($"{emp.Lname} {emp.Fname.Substring(0,1)}. {emp.Sname.Substring(0,1)}");
      return View("Employee", _adminServices.GetEmployees());
    }
    #endregion Employees


  }
}
