﻿using Microsoft.AspNetCore.Hosting.StaticWebAssets;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Identity.Client;
using OkLens.Models;
using OkLens.Services;
using OkLens.ViewModel;
using System;
using System.Dynamic;

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

    public IActionResult ExitApp()
    {
      return RedirectToAction("Register", "Register");
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

    #region Patient

    [HttpGet]
    public IActionResult PatientList()
    {
      return View(_managerServices.GetPatientViewList());
    }

    [HttpGet]
    public IActionResult AddPatient()
    {
      ViewData["HowKnowList"] = _managerServices.GetHowKnowList();
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddPatient([Bind("Lname, Fname, Sname, DateBirthday, RegAdress, TypeDocument, NumberDocument, Gender, WorkPlace, PhoneNumber")] Patient patient,
                                    [FromForm] int howknow)
    {
      if (ModelState.IsValid)
      {
        if (howknow != 0) patient.HowKnowId = howknow;
        _managerServices.AddObj(patient);
        return RedirectToAction("PatientList");
      }
      ViewData["HowKnowList"] = _managerServices.GetHowKnowList();
      return View(patient);
    }

    [HttpGet]
    public IActionResult AddPatientWithGuar()
    {
      ViewData["HowKnowList"] = _managerServices.GetHowKnowList();
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddPatientWithGuar([Bind("Lname, Fname, Sname, DateBirthday, RegAdress, TypeDocument, NumberDocument, Gender, WorkPlace, PhoneNumber," +
                                            " LnameGuar, FnameGuar, SnameGuar, DateBirthdayGuar, RegAdressGuar, TypeDocumentGuar, NumberDocumentGuar," +
                                            " GenderGuar, WorkPlaceGuar, PhoneNumberGuar")] PatientForView patient,
                                            [FromForm] int howknow)
    {
      if (ModelState.IsValid)
      {
        var patientGuar = new Patient()
        {
          Lname = patient.LnameGuar,
          Fname = patient.FnameGuar,
          Sname = patient.SnameGuar,
          RegAdress = patient.RegAdressGuar,
          TypeDocument = patient.TypeDocumentGuar,
          NumberDocument = patient.NumberDocumentGuar,
          Gender = patient.GenderGuar,
          WorkPlace = patient.WorkPlaceGuar,
          PhoneNumber = patient.PhoneNumberGuar
        };

        if (patient.DateBirthdayGuar != null) patientGuar.DateBirthday = (DateTime)patient.DateBirthdayGuar;
        else patientGuar.DateBirthday = DateTime.MinValue;

        if (howknow != 0) patientGuar.HowKnowId = howknow;

        _managerServices.AddObj(patientGuar);

        var patientMain = new Patient()
        {
          GuarnatirPatientId = patientGuar.PatientId,
          Lname = patient.Lname,
          Fname = patient.Fname,
          Sname = patient.Sname,
          RegAdress = patient.RegAdress,
          TypeDocument = patient.TypeDocument,
          NumberDocument = patient.NumberDocument,
          Gender = patient.Gender,
          WorkPlace = patient.WorkPlace,
          PhoneNumber = patient.PhoneNumber
        };

        if (patient.DateBirthdayGuar != null) patientMain.DateBirthday = (DateTime)patient.DateBirthday;
        else patientMain.DateBirthday = DateTime.MinValue;
        
        if (howknow != 0) patientMain.HowKnowId = howknow;
        
        _managerServices.AddObj(patientMain);
        
        return RedirectToAction("PatientList");
      }
      return View(patient);
    }

    public IActionResult DetailsPatient(int id)
    {
      return View(_managerServices.GetPatientWithGuar(id));
    }

    public IActionResult EditPatient(int id)
    {
      return View(_managerServices.GetPatient(id));
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult EditPatient([Bind("PatientId, Lname, Fname, Sname, DateBirthday, RegAdress, TypeDocument" +
                                          ", NumberDocument, Gender, WorkPlace, PhoneNumber")] Patient patient)
    {
      if (ModelState.IsValid)
      {
        _managerServices.UpdateObj(patient);
        return RedirectToAction("PatientList");
      }
      return View(patient);
    }

    public IActionResult DeletePatient(int id)
    {
      return View(_managerServices.GetPatientWithGuar(id));
    }

    public IActionResult DeletePatientAction(int id)
    {
      var patient = _managerServices.GetPatient(id);
      var reception = _managerServices.GetReception(id);
      if(reception != null)
      {
        ViewBag.Error = ErrorMessage.ErrorDeletePatient;        
        return View("PatientList", _managerServices.GetPatientViewList());
      }
      // если у пациента нет поручителя, проверяем является ли он сам поручителем и удаляем его и пациента у которого он является поручителем
      if (patient.GuarnatirPatientId == null)
      {
        var patients = _managerServices.GetPatients();
        var patientMain = patients.Where(p => p.GuarnatirPatientId == id).FirstOrDefault();

        if (patientMain != null) _managerServices.DeleteObj(patientMain);
      }

      _managerServices.DeleteObj(patient);
      return RedirectToAction("PatientList");
    }

    #endregion Patient

    #region Reception
    [HttpGet]
    public IActionResult ReceptionCalendar()
    {
      return View(_managerServices.GetReceptionsView());
    }

    [HttpGet]
    public IActionResult AddReception()
    {
      ViewData["Patient"] = _managerServices.GetPatientForReception();
      ViewData["Employee"] = _managerServices.GetDoctor();
      ViewData["Room"] = _managerServices.GetRoom();
      ViewData["Services"] = _managerServices.GetServiceList();
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult AddReception([Bind("PatientId,DateStart,DateEnd, Descr")] Reception reception,
                                        [FromForm] int patient,
                                        [FromForm] int employee,
                                        [FromForm] int room,
                                        [FromForm] int service)
    {
      if (ModelState.IsValid)
      {
        reception.PatientId = patient;
        reception.EmployeeId = employee;
        reception.RoomId = room;
        reception.ServicesId = service;
        _managerServices.AddObj(reception);
        return RedirectToAction("ReceptionCalendar");
      }
      return View();
    }

    #endregion Reception
  }
}