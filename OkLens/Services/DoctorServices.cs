using OkLens.Models;

namespace OkLens.Services
{
  public class DoctorServices
  {
    private readonly OkLensContext _okLensContext;
    public DoctorServices(OkLensContext okLensContext)
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

    #region Reception

    public List<ReceptionView> GetReceptionsView(int id)
    {
      return _okLensContext.ReceptionViews.Where(p => p.EmployeeId == id).ToList();
    }

    #endregion Reception
  }
}
