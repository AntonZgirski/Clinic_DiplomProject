using OkLens.ViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class Inspection
{
  public int InspectionId { get; set; }

  [Display(Name = "Анамнез")]  
  [StringLength(200)]
  public string? Anamnesis { get; set; }

  [Display(Name = "Жалобы")]
  [StringLength(200)]
  public string? Complaints { get; set; }

  [Display(Name = "Тест Шобера")]
  [StringLength(50)]
  public string? TestShobera { get; set; }

  [Display(Name = "Ведущий глаз")]
  [StringLength(50)]
  public string? LeadingEye { get; set; }

  [Display(Name = "Фория вдали")]
  [StringLength(50)]
  public string? PhoriaDist { get; set; }

  [Display(Name = "Фория вблизи")]
  [StringLength(50)]
  public string? PhoriaUp { get; set; }

  [Display(Name = "Ортофория")]
  [StringLength(50)]
  public string? Orthophoria { get; set; }

  [Display(Name = "ЗАО")]
  [StringLength(50)]
  public string? Zao { get; set; }

  [Display(Name = "ОАА")]
  [StringLength(50)]
  public string? Oaa { get; set; }

  [Display(Name = "Стереопсис")]
  [StringLength(50)]
  public string? Stereopsis { get; set; }

  [Display(Name = "Веки")]
  [StringLength(50)]
  public string? Eyelids { get; set; }

  [Display(Name = "Конъюктива")]
  [StringLength(50)]
  public string? Conjuctiva { get; set; }

  [Display(Name = "Роговица")]
  [StringLength(50)]
  public string? Cornea { get; set; }

  [Display(Name = "Передняя камера")]
  [StringLength(50)]
  public string? FrontCamera { get; set; }

  [Display(Name = "Радужка")]
  [StringLength(50)]
  public string? Iris { get; set; }

  [Display(Name = "Зрачок")]
  [StringLength(50)]
  public string? Pupil { get; set; }

  [Display(Name = "Хрусталик")]
  [StringLength(50)]
  public string? Lens { get; set; }

  [Display(Name = "Стекловидное тело")]
  [StringLength(50)]
  public string? VitrousBody { get; set; }

  [Display(Name = "Коментарий БМС")]
  [StringLength(200)]
  public string? CommentBms { get; set; }

  [Display(Name = "Диагноз")]
  [StringLength(200)]
  public string? Diagnosis { get; set; }

  [Display(Name = "Рекомендации")]
  [StringLength(200)]
  public string? Recommend { get; set; }

  public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}