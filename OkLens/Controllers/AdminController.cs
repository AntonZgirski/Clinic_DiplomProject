using Microsoft.AspNetCore.Mvc;
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
    
  }
}
