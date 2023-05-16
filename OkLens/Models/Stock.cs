using OkLens.ViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class Stock
{
  public int StockId { get; set; }

  [Display(Name = "Наименование")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(100)]
  public string Name { get; set; } = null!;

  [Display(Name = "Описание")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(200)]
  public string Descr { get; set; } = null!;

  [Display(Name = "Количество")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]  
  public int Count { get; set; }
  
  [Display(Name = "Стоимость")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [Range(typeof(decimal),"0,01","10000000,00",ErrorMessage = "Значения от 0,01 до 10000000,00")]
  public decimal Price { get; set; }

  public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
