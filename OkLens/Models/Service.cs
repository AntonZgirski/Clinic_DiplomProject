using OkLens.ViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class Service
{
  public int ServicesId { get; set; }

  [Display(Name = "Наименование")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(100)]
  public string Name { get; set; } = null!;

  [Display(Name = "Стоимость")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [Range(typeof(decimal), "0,01", "10000000,00", ErrorMessage = "Значения от 0,01 до 10000000,00")]
  public decimal Price { get; set; }

  public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}
