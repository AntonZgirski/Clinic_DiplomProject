using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Reception
{
    public int ReceptionId { get; set; }

    public int EmployeeId { get; set; }

    public int RoomId { get; set; }

    public int PatientId { get; set; }

    public int ContractId { get; set; }

    public int ServicesId { get; set; }

    public DateTime DateReception { get; set; }

    public int InspectionId { get; set; }

    public virtual Contract Contract { get; set; } = null!;

    public virtual Employee Employee { get; set; } = null!;

    public virtual Inspection Inspection { get; set; } = null!;

    public virtual Patient Patient { get; set; } = null!;

    public virtual Room Room { get; set; } = null!;

    public virtual Service Services { get; set; } = null!;
}
