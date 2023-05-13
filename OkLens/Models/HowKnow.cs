using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class HowKnow
{
    public int HowKnowId { get; set; }

    public string? Descr { get; set; }

    public virtual ICollection<Patient> Patients { get; set; } = new List<Patient>();
}
