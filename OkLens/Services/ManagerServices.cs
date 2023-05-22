using Microsoft.AspNetCore.Mvc;
using OkLens.Models;
using OkLens.ViewModel;

namespace OkLens.Services
{
  public class ManagerServices
  {
    private readonly OkLensContext _okLensContext;
    public ManagerServices(OkLensContext okLensContext)
    {
      _okLensContext = okLensContext;
    }

    public void AddObj(object obj)
    {
      _okLensContext.Add(obj);
      _okLensContext.SaveChanges();
    }

    public void UpdateObj(object obj)
    {
      _okLensContext.Update(obj);
      _okLensContext.SaveChanges();
    }

    public void DeleteObj(object obj)
    {
      _okLensContext.Remove(obj);
      _okLensContext.SaveChanges();
    }

    #region Room
    public List<Room> GetRoom()
    {
      return _okLensContext.Rooms.ToList();
    }

    public Room GetRoom(int id)
    {
      return _okLensContext.Rooms.Where(p => p.RoomId == id).FirstOrDefault();
    }

    #endregion Room

    #region HowKnow
    public List<HowKnow> GetHowKnowList()
    {
      return _okLensContext.HowKnows.ToList();
    }

    public HowKnow GetHowKnow(int id)
    {
      return _okLensContext.HowKnows.Where(p => p.HowKnowId == id).FirstOrDefault();
    }
    #endregion HowKnow

    #region Services

    public List<Service> GetServiceList()
    {
      return _okLensContext.Services.ToList();
    }

    public Service GetServices(int id)
    {
      return _okLensContext.Services.Where(p => p.ServicesId == id).FirstOrDefault();
    }

    #endregion Services

    #region Stock

    public List<Stock> GetStockList()
    {
      return _okLensContext.Stocks.ToList();
    }

    public Stock GetStock(int id)
    {
      return _okLensContext.Stocks.Where(p => p.StockId == id).FirstOrDefault();
    }

    #endregion Stock

    #region Patient

    public List<PatientForView> GetPatientViewList()
    {
      return _okLensContext.PatientForViews.ToList();
    }

    public PatientForView GetPatientWithGuar(int id)
    {
      var pat = _okLensContext.PatientForViews.Where(p => p.PatientId == id).FirstOrDefault();

      if (pat.GuarnatirPatientId != null) 
      {
        DateTime dGuar = (DateTime)pat.DateBirthdayGuar;
        pat.DateBirthdayGuarStr = dGuar.ToString("d");
      }
      return pat;
    }

    public Patient GetPatient(int id)
    {
      return _okLensContext.Patients.Where(p => p.PatientId == id).FirstOrDefault();
    }

    public List<Patient> GetPatients()
    {
      return _okLensContext.Patients.ToList();
    }
    #endregion Patient

    #region Reception

    public List<ReceptionView> GetReceptionsView()
    {
      return _okLensContext.ReceptionViews.ToList();
    }

    public List<PatientForView> GetPatientForReception()
    {
      return _okLensContext.PatientForViews.ToList();
    }

    public List<ListEmployeeForView> GetDoctor()
    {
      return _okLensContext.ListEmployeeForViews.Where(p => p.RoleName == "Доктор").ToList();
    }
    #endregion Reception

  }
}