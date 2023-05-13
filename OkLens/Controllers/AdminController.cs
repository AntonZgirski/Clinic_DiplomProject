using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OkLens.Models;
using OkLens.Services;

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
      _adminServices.SaveEmployee(emp);      
      return RedirectToAction("Employee");
    }

    public IActionResult DetailsEmployee(int id)
    {
      var emp = _adminServices.GetEmployee(id);
      return View(emp);
    }

    public IActionResult EditEmployee(int id)
    {
      var edtvm = new EditEmployeeViewModel();
      edtvm.Employee = _adminServices.GetEmployee(id);
      edtvm.Roles = _adminServices.GetRoles();
      return View(edtvm);
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
      if (_adminServices.CheckDublicateLoginEmployee(login))
      {
        var edtvm = new EditEmployeeViewModel();
        edtvm.Employee = _adminServices.GetEmployee(id);
        edtvm.Roles = _adminServices.GetRoles();
        ViewBag.Error = ErrorMessage.ErrorDublicateLoginEmployee(login);
        return View("EditEmployee", edtvm);
      }
      var emp = _adminServices.GetEmployee(id);
      emp.Lname = lname;
      emp.Sname = sname;
      emp.Fname = fname;
      emp.DateBirthday = datebir;
      emp.RoleId = role;
      emp.Category = category;
      emp.Login = login;

      _adminServices.SaveEditEmployee(emp);
      return RedirectToAction("Employee");
    }


  }
}
