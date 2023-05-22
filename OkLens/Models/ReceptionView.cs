using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class ReceptionView
{
  public int ReceptionId { get; set; }
  
  public int? EmployeeId { get; set; }

  public string? Fioemployee { get; set; }

  public string? Fiopatient { get; set; }

  public string? Adress { get; set; }

  public string? Name { get; set; }

  [Display(Name = "Дата начала")]
  public DateTime DateStart { get; set; }

  [Display(Name = "Дата окончания")]
  public DateTime DateEnd { get; set; }

  [Display(Name = "Примечание")]
  public string? Descr { get; set; }
}
