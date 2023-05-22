using Microsoft.AspNetCore.Mvc;
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

    public ActionResult ReceptionList()
    {      
      return View(_doctorServices.GetReceptionsView(_registerServices.GetUserId()));
    }

    [HttpGet]
    public ActionResult AddInspection()
    {
      return View();
    }
  }
}
