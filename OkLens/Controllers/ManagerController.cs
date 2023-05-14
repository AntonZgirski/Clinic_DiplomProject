using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using OkLens.Models;
using OkLens.Services;
using OkLens.ViewModel;
using System;

namespace OkLens.Controllers
{
  public class ManagerController : Controller
  {
    private readonly ILogger<ManagerController> _logger;
    private readonly ManagerServices _managerServices;

    public ManagerController(ILogger<ManagerController> logger, ManagerServices managerServices)
    {
      _logger = logger;
      _managerServices = managerServices;
    }

    #region Room
    [HttpGet]
    public IActionResult RoomList()
    {
      return View(_managerServices.GetRoom());
    }

    [HttpGet]
    public IActionResult AddRoom()
    {
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddRoom([Bind("Adress,PhoneNumber,CountWorkPlace")] Room room)
    {
      if(ModelState.IsValid)
      {
        _managerServices.AddRoom(room);
        return RedirectToAction("RoomList");
      }
      return View(room);
    }

    #endregion Room
  }
}
