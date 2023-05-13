using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class Employee
{
  public int EmployeeId { get; set; }

  public int RoleId { get; set; }

  [Display(Name = "Имя")]
  public string Fname { get; set; } = null!;

  [Display(Name = "Отчество")]
  public string Sname { get; set; } = null!;

  [Display(Name = "Фамилия")]
  public string Lname { get; set; } = null!;

  [Display(Name = "Дата рождения")]
  public DateTime DateBirthday { get; set; }
  
  public string DateBirthdayStr => DateBirthday.ToShortDateString();

  [Display(Name = "Категория")]
  public string? Category { get; set; }

  [Display(Name = "Логин")]
  public string Login { get; set; } = null!;

  public string? Password { get; set; }

  public bool FirstEntry { get; set; }

  public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
  
  [Display(Name = "Роль")]
  public virtual Role Role { get; set; } = null!;

  public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
