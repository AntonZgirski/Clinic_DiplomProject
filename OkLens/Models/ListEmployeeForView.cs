using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class ListEmployeeForView
{
    public int EmployeeId { get; set; }

    public string? Fio { get; set; }

    public string RoleName { get; set; } = null!;

    public DateTime DateBirthday { get; set; }

    public string DateBirthdayStr => DateBirthday.ToShortDateString();
    public string? Category { get; set; }

    public string Login { get; set; } = null!;
}
