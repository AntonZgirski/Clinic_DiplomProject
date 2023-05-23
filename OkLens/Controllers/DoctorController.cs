using Microsoft.AspNetCore.Mvc;
using OkLens.Models;
using OkLens.Services;

namespace OkLens.Controllers
{
  public class DoctorController : Controller
  {
    private readonly ILogger<DoctorController> _logger;
    private readonly DoctorServices _doctorServices;
    private readonly RegisterServices _registerServices;

    public DoctorController(ILogger<DoctorController> logger, DoctorServices doctorServices, RegisterServices registerServices)
    {
      _logger = logger;
      _doctorServices = doctorServices;
      _registerServices = registerServices;
    }

    public IActionResult ExitApp()
    {
      return RedirectToAction("Register", "Register");
    }

    public ActionResult ReceptionList()
    {
      return View(_doctorServices.GetReceptionsView(_registerServices.GetUserId()));
    }

    [HttpGet]
    public ActionResult AddInspection()
    {
      return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult AddInspection([Bind("Anamnesis,Complaints,TestShobera,LeadingEye,PhoriaDist," +
                                            "PhoriaUp,Orthophoria,Zao,Oaa,Stereopsis,Eyelids,Conjuctiva," +
                                            "Cornea,FrontCamera,Iris,Pupil,Lens,VitrousBody,CommentBms," +
                                            "Diagnosis,Recommend")] Inspection inspection)
    {
      if (ModelState.IsValid)
      {              
        _doctorServices.AddObj(inspection);
        
        var reception = _doctorServices.GetReception(Int32.Parse(RouteData.Values["id"].ToString()));
        reception.InspectionId = inspection.InspectionId;
        _doctorServices.UpdateObj(reception);
        
        return RedirectToAction("ReceptionList");
      }
      return View(inspection);
    }
  }
}
