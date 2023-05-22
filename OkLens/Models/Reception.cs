using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OkLens.Models;

public partial class Reception
{
    public int ReceptionId { get; set; }

    public int? EmployeeId { get; set; }

    public int? RoomId { get; set; }

    public int? PatientId { get; set; }

    public int? ContractId { get; set; }

    public int? ServicesId { get; set; }

    public int? InspectionId { get; set; }

    [Display(Name = "Дата начала")]
    public DateTime DateStart { get; set; }

    [Display(Name = "Дата окончания")]
    public DateTime DateEnd { get; set; }

    [Display(Name = "Примечание")]
    public string? Descr { get; set; }

    public virtual Contract? Contract { get; set; }

    public virtual Employee? Employee { get; set; }

    public virtual Inspection? Inspection { get; set; }

    public virtual Patient? Patient { get; set; }

    public virtual Room? Room { get; set; }

    public virtual Service? Services { get; set; }
}
