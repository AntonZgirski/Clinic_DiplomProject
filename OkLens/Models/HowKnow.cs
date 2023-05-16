using OkLens.ViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class HowKnow
{
  public int HowKnowId { get; set; }

  [Display(Name = "Описание")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(30)]
  public string Descr { get; set; }

  public virtual ICollection<Patient> Patients { get; set; } = new List<Patient>();
}
