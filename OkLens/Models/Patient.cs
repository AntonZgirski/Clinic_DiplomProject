using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Patient
{
    public int PatientId { get; set; }

    public int? GuarnatirPatientId { get; set; }

    public string Fname { get; set; } = null!;

    public string Sname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public DateTime DateBirthday { get; set; }

    public string RegAdress { get; set; } = null!;

    public string TypeDocument { get; set; } = null!;

    public string NumberDocument { get; set; } = null!;

    public string Gender { get; set; } = null!;

    public string? WorkPlace { get; set; }

    public string PhoneNumber { get; set; } = null!;

    public int HowKnowId { get; set; }

    public virtual HowKnow HowKnow { get; set; } = null!;

    public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}
