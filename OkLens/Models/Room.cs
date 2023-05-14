using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class Room
{
  public int RoomId { get; set; }

  [Display(Name = "Адрес")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(200)]
  public string Adress { get; set; } = null!;

  [Display(Name = "Номер телефона")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [Phone(ErrorMessage = "Не верный формат!")]
  public string PhoneNumber { get; set; } = null!;

  [Display(Name = "Количество рабочих мест")]  
  public int? CountWorkPlace { get; set; }

  public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}
