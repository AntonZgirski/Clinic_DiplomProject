using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Employee
{
    public int EmployeeId { get; set; }

    public int RoleId { get; set; }

    public string Fname { get; set; } = null!;

    public string Sname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public DateTime DateBirthday { get; set; }

    public string? Category { get; set; }

    public string Login { get; set; } = null!;

    public string? Password { get; set; }

    public bool FirstEntry { get; set; }

    public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();

    public virtual Role Role { get; set; } = null!;

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
