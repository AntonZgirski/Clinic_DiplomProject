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
        _managerServices.AddObj(room);
        return RedirectToAction("RoomList");
      }
      return View(room);
    }

    public IActionResult DetailsRoom(int id)
    {      
      return View(_managerServices.GetRoom(id));
    }

    [HttpGet]
    public IActionResult EditRoom(int id)
    {
      return View(_managerServices.GetRoom(id));
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult EditRoom([Bind("RoomId,Adress,PhoneNumber,CountWorkPlace")] Room room)
    {
      if (ModelState.IsValid)
      {
        _managerServices.UpdateObj(room);
        return RedirectToAction("RoomList");
      }
      return View(room);
    }

    public IActionResult DeleteRoom(int id)
    {
      return View(_managerServices.GetRoom(id));
    }

    public IActionResult DeleteAct(int id)
    {
      _managerServices.DeleteObj(_managerServices.GetRoom(id));
      return RedirectToAction("RoomList");
    }


    #endregion Room

    #region HowKnow

    public IActionResult HowKnowList()
    {
      return View(_managerServices.GetHowKnowList());
    }

    [HttpGet]
    public IActionResult AddHowKnow()
    {
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddHowKnow([Bind("Descr")] HowKnow howKnow)
    {
      if (ModelState.IsValid)
      {
        _managerServices.AddObj(howKnow);
        return RedirectToAction("HowKnowList");
      }
      return View(howKnow);
    }

    [HttpGet]
    public IActionResult EditHowKnow(int id)
    {
      return View(_managerServices.GetHowKnow(id));
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult EditHowKnow([Bind("HowKnowId,Descr")] HowKnow howKnow)
    {
      if (ModelState.IsValid)
      {
        _managerServices.UpdateObj(howKnow);
        return RedirectToAction("HowKnowList");
      }
      return View(howKnow);
    }

    public IActionResult DeleteHowKnow(int id)
    {
      return View(_managerServices.GetHowKnow(id));
    }

    public IActionResult DeleteHowKnowAction(int id)
    {
      _managerServices.DeleteObj(_managerServices.GetHowKnow(id));
      return RedirectToAction("HowKnowList");
    }
    #endregion HowKnow

    #region Services

    public IActionResult ServiceList()
    {
      return View(_managerServices.GetServiceList());
    }

    [HttpGet]
    public IActionResult AddService()
    {
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddService([Bind("Name, Price")] Service services)
    {
      if (ModelState.IsValid)
      {
        _managerServices.AddObj(services);
        return RedirectToAction("ServiceList");
      }
      return View(services);
    }

    [HttpGet]
    public IActionResult EditService(int id)
    {
      return View(_managerServices.GetServices(id));
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult EditService([Bind("ServicesId,Name,Price")] Service service)
    {
      if (ModelState.IsValid)
      {
        _managerServices.UpdateObj(service);
        return RedirectToAction("ServiceList");
      }
      return View(service);
    }

    public IActionResult DeleteService(int id)
    {
      return View(_managerServices.GetServices(id));
    }

    public IActionResult DeleteServiceAction(int id)
    {
      _managerServices.DeleteObj(_managerServices.GetServices(id));
      return RedirectToAction("ServiceList");
    }

    #endregion Services

    #region Stock
    public IActionResult StockList()
    {
      return View(_managerServices.GetStockList());
    }

    [HttpGet]
    public IActionResult AddStock()
    {
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddStock([Bind("Name, Descr, Count, Price")] Stock stock)
    {
      if (ModelState.IsValid)
      {
        _managerServices.AddObj(stock);
        return RedirectToAction("StockList");
      }
      return View(stock);
    }

    [HttpGet]
    public IActionResult EditStock(int id)
    {
      return View(_managerServices.GetStock(id));
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult EditStock([Bind("StockId, Name, Descr, Count, Price")] Stock stock)
    {
      if (ModelState.IsValid)
      {
        _managerServices.UpdateObj(stock);
        return RedirectToAction("StockList");
      }
      return View(stock);
    }

    public IActionResult DeleteStock(int id)
    {
      return View(_managerServices.GetStock(id));
    }

    public IActionResult DeleteStockAction(int id)
    {
      _managerServices.DeleteObj(_managerServices.GetStock(id));
      return RedirectToAction("StockList");
    }

    #endregion Stock

  }
}
