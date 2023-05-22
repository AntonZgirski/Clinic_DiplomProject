using OkLens.ViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class PatientForView
{
  public int PatientId { get; set; }

  public int? GuarnatirPatientId { get; set; }

  [Display(Name = "Имя")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string Fname { get; set; } = null!;

  [Display(Name = "Отчество")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string Sname { get; set; } = null!;

  [Display(Name = "Фамилия")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string Lname { get; set; } = null!;

  [Display(Name = "Дата рождения")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  public DateTime DateBirthday { get; set; }
  public string DateBirthdayStr => DateBirthday.ToShortDateString();

  [Display(Name = "Адрес регистрации")]
  [StringLength(200)]
  public string? RegAdress { get; set; }

  [Display(Name = "Тип документа")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string TypeDocument { get; set; } = null!;

  [Display(Name = "Номер документа")]
  [StringLength(50)]
  public string? NumberDocument { get; set; }

  [Display(Name = "Пол")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  public string Gender { get; set; } = null!;

  [Display(Name = "Место работы")]
  [StringLength(100)]
  public string? WorkPlace { get; set; }

  [Display(Name = "Номер телефона")]
  [Required(ErrorMessage = "Поле не может быть пустым!")]
  [Phone(ErrorMessage = "Не верный формат!")]
  public string PhoneNumber { get; set; } = null!;

  public int? HowKnowId { get; set; }

  public string? Fio { get; set; }

  [Display(Name = "Откуда о нас узнали?")]
  public string? HowKnowDescr { get; set; }

  [Display(Name = "Имя")]
  //[Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string? FnameGuar { get; set; }

  [Display(Name = "Отчество")]
  //[Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string? SnameGuar { get; set; }

  [Display(Name = "Фамилия")]
  //[Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string? LnameGuar { get; set; }

  [Display(Name = "Дата рождения")]
  //[Required(ErrorMessage = "Поле не может быть пустым!")]
  public DateTime? DateBirthdayGuar { get; set; }
  public string DateBirthdayGuarStr;

  [Display(Name = "Адрес регистрации")]
  [StringLength(200)]
  public string? RegAdressGuar { get; set; }

  [Display(Name = "Тип документа")]
  //[Required(ErrorMessage = "Поле не может быть пустым!")]
  [StringLength(50)]
  public string? TypeDocumentGuar { get; set; }

  [Display(Name = "Номер документа")]
  [StringLength(50)]
  public string? NumberDocumentGuar { get; set; }

  [Display(Name = "Пол")]
  //[Required(ErrorMessage = "Поле не может быть пустым!")]
  public string? GenderGuar { get; set; }

  [Display(Name = "Место работы")]
  [StringLength(100)]
  public string? WorkPlaceGuar { get; set; }

  [Display(Name = "Номер телефона")]
  //[Required(ErrorMessage = "Поле не может быть пустым!")]
  [Phone(ErrorMessage = "Не верный формат!")]
  public string? PhoneNumberGuar { get; set; }

  public string? Fioguarmatir { get; set; }
}
