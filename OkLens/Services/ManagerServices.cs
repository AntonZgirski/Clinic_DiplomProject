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

    #region Room
    public List<Room> GetRoom()
    {
      return _okLensContext.Rooms.ToList();
    }
    public void AddRoom(object emp)
    {
      _okLensContext.Add(emp);
      _okLensContext.SaveChanges();
    }

    #endregion Room
  }
}