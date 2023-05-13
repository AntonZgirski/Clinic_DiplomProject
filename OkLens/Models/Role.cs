using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class Role
{
  public int RoleId { get; set; }

  [Display(Name = "Роль")]
  public string RoleName { get; set; } = null!;

  public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
