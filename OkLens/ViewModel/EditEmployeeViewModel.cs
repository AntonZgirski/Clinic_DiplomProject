using OkLens.Models;

namespace OkLens.ViewModel
{
    public class EditEmployeeViewModel
    {
        public Employee Employee { get; set; }
        public IEnumerable<Role> Roles { get; set; }
    }
}
