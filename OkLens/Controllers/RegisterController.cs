using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using OkLens.Models;
using OkLens.Services;
using OkLens.ViewModel;

namespace OkLens.Controllers
{
    public class RegisterController : Controller
  {
    private readonly ILogger<RegisterController> _logger;
    private readonly RegisterServices _registerServices;       

    public RegisterController(ILogger<RegisterController> logger, RegisterServices registerServices)
    {
      _logger = logger;
      _registerServices = registerServices;      
    }

    [HttpGet]
    public IActionResult Register()
    {
      return View();
    }

    [HttpPost]
    public IActionResult Authenfic([FromForm] string login, [FromForm] string password)
    {
      // сделать валидацию на пустые логин и пароль
      var user = _registerServices.GetUser(login);
      if (user == null)
      {
        ViewBag.Error = ErrorMessage.ErrorUserNotFound;
        return View("Register");
      }
      if (user.FirstEntry)
      {
        _registerServices.FirstEntryApp(user, password);
        ViewBag.Error = ErrorMessage.MesPasswordSaveTryAgain;
        return View("Register");
      }      

      if (user.Password == password)
      {
        switch (user.Role.RoleId)
        {
          case UsersRoles.Administrator:
            _registerServices.WriteUserId(user.EmployeeId);
            return RedirectToAction("Employee", "Admin");
          case UsersRoles.Doctor:
            _registerServices.WriteUserId(user.EmployeeId);
            return RedirectToAction("ReceptionList", "Doctor");            
          case UsersRoles.Manager:
            _registerServices.WriteUserId(user.EmployeeId);
            return RedirectToAction("ReceptionCalendar", "Manager");            
          default:
            ViewBag.ErrorAut = ErrorMessage.ErrorPasswordOrLoginIncorrect;
            return View("Register");
        }
      }
      else
      {
        ViewBag.Error = ErrorMessage.ErrorPasswordIncorrect;
        return View("Register");
      }

    }
  }

}
