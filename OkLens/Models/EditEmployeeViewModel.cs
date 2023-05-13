namespace OkLens.Models
{
    public class EditEmployeeViewModel
    {
        public Employee Employee { get; set; }
        public IEnumerable<Role> Roles { get; set; }
    }
}
